"use client";
import React from "react";
import { Box, Typography, Grid, Paper, Stack, Avatar, Button, Tooltip, LinearProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import CircleIcon from '@mui/icons-material/Circle';

const tlProjects = [
  { id: 1, name: "E-commerce App", description: "Shopping platform for retail customers", deadline: "2025-09-30", progress: 60, status: "Active", team: ["Ravi", "Sara"], tasks: 24 },
  { id: 2, name: "Banking Dashboard", description: "Analytics dashboard for bank managers", deadline: "2025-10-15", progress: 30, status: "At Risk", team: ["John"], tasks: 12 },
];

const statusColors: Record<string, string> = {
  Active: "#26a69a",
  "At Risk": "#ffa726",
  Completed: "#66bb6a",
};

const TLProjectScreen = () => {
  const router = useRouter();
  const handleManageTasks = (projectId: number) => router.push(`/tl/assign/${projectId}`);

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffffff, #b2dfdb)",
      }}
    >
      <Typography sx={{ mb: 5, fontWeight: 700, fontSize: 28, color: "#004d40" }}>
        📂 My Projects
      </Typography>

      <Grid container spacing={4}>
        {tlProjects.map((project) => (
          <Grid size={{xs:12,md:12, lg:6}} key={project.id}>
            <Paper
              elevation={8}
              sx={{
                p: 3,
                borderRadius: 3,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* Title & Status */}
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "#004d40" }}>
                  {project.name}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <CircleIcon sx={{ fontSize: 12, color: statusColors[project.status] }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: "#555" }}>{project.status}</Typography>
                </Stack>
              </Stack>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {project.description}
              </Typography>

              {/* Progress */}
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: "#004d40" }}>Progress</Typography>
              <LinearProgress
                variant="determinate"
                value={project.progress}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#e0f2f1",
                  "& .MuiLinearProgress-bar": { borderRadius: 5, background: `linear-gradient(90deg, ${statusColors[project.status]}, #004d40)` },
                  mb: 1.5,
                }}
              />
              <Typography variant="caption" sx={{ color: "#555" }}>{project.progress}% Completed</Typography>

              {/* Team */}
              <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 600, color: "#004d40" }}>Team Members</Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                {project.team.map((member, idx) => (
                  <Tooltip key={idx} title={member} arrow>
                    <Avatar sx={{ bgcolor: "#26a69a", fontWeight: 600, fontSize: 14 }}>{member[0]}</Avatar>
                  </Tooltip>
                ))}
              </Stack>

              {/* Stats */}
              <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">Tasks</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{project.tasks}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Deadline</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{project.deadline}</Typography>
                </Box>
              </Stack>

              {/* Manage Tasks */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  background: "linear-gradient(45deg, #26a69a, #004d40)",
                  "&:hover": { background: "linear-gradient(45deg, #00796b, #004d40)" },
                }}
                onClick={() => handleManageTasks(project.id)}
              >
                Manage Tasks
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TLProjectScreen;
