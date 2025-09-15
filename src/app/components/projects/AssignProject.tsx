import {
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  createProject,
  getAllProject,
  updateProject,
  deleteProject,
} from "@/app/store/project/project.thunk";
import { RootState } from "@/app/store/store";
import CommonDialog from "@/app/common/commonDialog";
import CommonDeleteDialog from "@/app/common/DeleteDialog";

const ManageProject = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.project
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [formData, setFormData] = useState({projectName: "",projectDescription: "",duration: ""});
  const [editProjectId, setEditProjectId] = useState<string | null>(null);
  const [deleteProjectId, setDeleteProjectId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getAllProject() as any);
  }, [dispatch]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = async () => {
    try {
      if (editProjectId) {
        await dispatch(
          updateProject({ id: editProjectId, data: formData }) as any
        ).unwrap();
      } else {
        await dispatch(createProject(formData) as any).unwrap();
      }
      setOpenDialog(false);
      setFormData({ projectName: "", projectDescription: "", duration: "" });
      setEditProjectId(null);
      dispatch(getAllProject() as any);
    } catch (err) {
      console.error("Failed to save project:", err);
    }
  };

  // delete handler
  const handleDelete = async () => {
    if (!deleteProjectId) return;
    try {
      await dispatch(deleteProject(deleteProjectId) as any).unwrap();
      setDeleteProjectId(null);
      setOpenDeleteDialog(false);
      dispatch(getAllProject() as any);
    } catch (err) {
      console.error("Failed to delete project:", err);
    }
  };

  return (
    <Box sx={{ overflowY: "auto", height: "calc(100vh - 120px)" }}>
      <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "17px" }}>
        Assign Project
      </Typography>

      <Box mt={2}>
        <Button
          sx={{
            textTransform: "none",
            color: "white",
            height: "40px",
            width: "145px",
            backgroundColor: "teal",
            borderRadius: "6px",
          }}
          onClick={() => {
            setEditProjectId(null);
            setFormData({
              projectName: "",
              projectDescription: "",
              duration: "",
            });
            setOpenDialog(true);
          }}
        >
          Assign Project
        </Button>
      </Box>

      {/* Project List */}
      <Grid
        container
        spacing={3}
        mt={2}
        ml={1}
        sx={{
          overflowY: "auto",
          maxHeight: "77vh",
        }}
      >
        {loading && (
          <Typography sx={{ mt: 2, color: "gray" }}>Loading...</Typography>
        )}
        {error && (
          <Typography sx={{ mt: 2, color: "red" }}>Error: {error}</Typography>
        )}

        {data?.map((project: any) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={project._id}>
            <Paper
              elevation={3}
              sx={{
                p: 1,
                borderRadius: "12px",
                width: "320px",
                height: "150px",
                position: "relative",
                minHeight: "150px",
                background: "linear-gradient(135deg, #ffffff 30%, #008080)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                color: "#fff"
              }}
            >
              {/* Project Content */}
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", color: "black", fontSize: "18px" }}
                >
                  {project.projectName}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 3, color: "black", fontSize: "16px" }}
                >
                  {project.projectDescription}
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
                  onClick={() => {
                    setEditProjectId(project._id);
                    setFormData({
                      projectName: project.projectName,
                      projectDescription: project.projectDescription,
                      duration: project.duration,
                    });
                    setOpenDialog(true);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => {
                    setDeleteProjectId(project._id);
                    setOpenDeleteDialog(true);
                  }}>
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
                  pointerEvents: "none"
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Project Dialog */}
      <CommonDialog
        title={editProjectId ? "Edit Project" : "Add Project"}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleSubmit}
        submitLabel={editProjectId ? "Update" : "Save"}
        content={
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Project Name"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="TL Name"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              fullWidth
            />
          </Box>
        }
      />

      {/* Delete Dialog */}
      <CommonDeleteDialog
        open={openDeleteDialog}
        title="Delete Project"
        message="Are you sure you want to delete this project?"
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleDelete}
      />
    </Box>
  );
};

export default ManageProject;
