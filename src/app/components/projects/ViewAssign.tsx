"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Chip,
  Select,
  MenuItem,
} from "@mui/material";

// Example tasks assigned to employee
const employeeTasksData = [
  {
    id: 1,
    title: "UI Design - Login Page",
    description: "Design login page for E-commerce App",
    project: "E-commerce App",
    deadline: "2025-09-20",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 2,
    title: "API Testing",
    description: "Test authentication API endpoints",
    project: "Banking Dashboard",
    deadline: "2025-09-25",
    status: "To-do",
    priority: "Medium",
  },
];

const EmployeeTaskScreen = () => {
  const [tasks, setTasks] = useState(employeeTasksData);

  const handleStatusChange = (id: number, newStatus: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f3f3f3, #e0f7fa)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        📝 My Tasks
      </Typography>

      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid size={{xs:12,md:6,lg:4}} key={task.id}>
            <Paper
              elevation={4}
              sx={{
                p: 2.5,
                borderRadius: 3,
                background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {task.description}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Chip label={`Project: ${task.project}`} size="small" />
                <Chip label={`Priority: ${task.priority}`} color="secondary" size="small" />
                <Chip label={`Deadline: ${task.deadline}`} variant="outlined" size="small" />
              </Stack>

              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Typography variant="body2">Status:</Typography>
                <Select
                  value={task.status}
                  onChange={(e) =>
                    handleStatusChange(task.id, e.target.value)
                  }
                  size="small"
                >
                  <MenuItem value="To-do">To-do</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EmployeeTaskScreen;
