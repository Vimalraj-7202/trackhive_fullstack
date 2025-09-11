import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonDialog from "@/app/common/commonDialog";
import CommonDeleteDialog from "@/app/common/DeleteDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageProject = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
  });
  const [projects, setProjects] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("projects");
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      }
    } catch (err) {
      console.error("Error parsing localStorage projects:", err);
    }
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      localStorage.removeItem("projects");
    }
  }, [projects]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenAdd = () => {
    setFormData({ name: "", description: "", duration: "" });
    setEditIndex(null);
    setOpenDialog(true);
  };

  const handleEdit = (index: number) => {
    setFormData(projects[index]);
    setEditIndex(index);
    setOpenDialog(true);
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = formData;
      setProjects(updatedProjects);
    } else {
      setProjects((prev) => [...prev, formData]);
    }
    setFormData({ name: "", description: "", duration: "" });
    setEditIndex(null);
    setOpenDialog(false);
  };

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
    setOpenDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      setProjects((prev) => prev.filter((_, i) => i !== deleteIndex));
    }
    setDeleteIndex(null);
    setOpenDeleteDialog(false);
  };

  const formDialogContent = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
      <TextField
        label="Project Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        fullWidth
        placeholder="e.g., 3 weeks"
      />
    </Box>
  );

  return (
    <>
      <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "17px" }}>
        Manage Project
      </Typography>

      <Box mt={2}>
        <Button
          sx={{
            textTransform: "none",
            color: "white",
            height: "40px",
            width: "140px",
            backgroundColor: "teal",
            borderRadius: "6px",
          }}
          onClick={handleOpenAdd}
        >
          Add Project
        </Button>
      </Box>

      {/* Project List */}
      <Grid container spacing={3} mt={2}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: "12px",
                width: "290px",
                height: "130px",
                position: "relative",
                background: "linear-gradient(135deg, #ffffff 30%, #008080)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                color: "#fff",
              }}
            >
              {/* Project Content */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 3, color: "black", fontSize: "16px" }}
                >
                  {project.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ mt: 1, color: "gray", fontSize: "14px" }}
                >
                  Duration: {project.duration}
                </Typography>
              </Box>

              {/* Actions */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => handleEdit(index)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Dotted Pattern */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                  backgroundSize: "18px 18px",
                  transform: "rotate(-45deg) scale(1.2)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Dialog */}
      <CommonDialog
        title={editIndex !== null ? "Edit Project" : "Add Project"}
        content={formDialogContent}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleSubmit}
        submitLabel={editIndex !== null ? "Update" : "Add"}
      />

      {/* Delete Dialog */}
      <CommonDeleteDialog
        open={openDeleteDialog}
        title="Delete Project"
        message="Are you sure you want to delete this project?"
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default ManageProject;
