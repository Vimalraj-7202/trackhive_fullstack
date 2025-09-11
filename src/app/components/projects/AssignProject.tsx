"use client";
import React, { useState } from "react";
import {Box,Typography,Paper,Grid,Button,MenuItem,Select} from "@mui/material";

const AssignProject = () => {
  const teamLeads = ["TL - John", "TL - Priya", "TL - Arjun", "TL - Sara"];
  const projects = ["E-commerce App", "AI Chatbot", "CRM Dashboard", "HR Portal"];

  const [assignedProjects, setAssignedProjects] = useState<{ [key: string]: string | null }>({});

  // project assign
  const handleAssign = (tl: string, project: string) => {
    setAssignedProjects((prev) => ({ ...prev, [tl]: project }));
  };

  //project remove
  const handleRemove = (tl: string) => {
    setAssignedProjects((prev) => ({ ...prev, [tl]: null }));
  };

  return (
    <Box sx={{ p:1}}>
      <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "17px"  }}>
        Assign Projects to Team Leads
      </Typography>

      <Grid sx={{mt:2}} container spacing={3}>
        {teamLeads.map((tl, index) => (
          <Grid size={{xs:12,sm:6,md:4}} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: "12px",
                height: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, #ffffff 30%, #008080)",
                color: "#000",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {tl}
              </Typography>

              {/* Show assigned project if exists */}
              {assignedProjects[tl] ? (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Assigned Project:
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    {assignedProjects[tl]}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No project assigned
                </Typography>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                {!assignedProjects[tl] ? (
                  <Select
                    size="small"
                    displayEmpty
                    onChange={(e) => handleAssign(tl, e.target.value)}
                    sx={{
                      background: "white",
                      borderRadius: "6px",
                      minWidth: "140px",
                      fontSize: "14px",
                    }}
                    value=""
                  >
                    <MenuItem value="" disabled>
                      Select Project
                    </MenuItem>
                    {projects.map((project, i) => (
                      <MenuItem key={i} value={project}>
                        {project}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  <Button
                    onClick={() => handleRemove(tl)}
                    sx={{
                      textTransform: "none",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "6px",
                      px: 2,
                      "&:hover": { backgroundColor: "#b71c1c" },
                    }}
                  >
                    Remove
                  </Button>
                )}
              </Box>

              {/* Dotted Pattern on Right */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "50%",
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                  backgroundSize: "16px 16px",
                  transform: "rotate(-45deg)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AssignProject;
