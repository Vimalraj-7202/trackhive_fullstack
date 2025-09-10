import { Box, Paper, Typography, Chip, Divider } from "@mui/material";
import React from "react";

const sprintData = [
  { id: 1, name: "Alice", task: "Fix login validation issue", status: "In Progress" },
  { id: 2, name: "Shelby", task: "Write unit testcases", status: "Todo" },
  { id: 3, name: "Merlin", task: "Update Dashboard UI", status: "Done" },
  { id: 4, name: "Vimal", task: "Revamp settings page", status: "In Review" },
  { id: 5, name: "Vimal", task: "DevOps Routing issue", status: "In Review" },
];

const statusColors: Record<string, "default" | "primary" | "success" | "warning" | "error"> = {
  "Todo": "default",
  "In Progress": "warning",
  "Done": "success",
  "In Review": "primary"
};

const SprintTaskOverview = () => {
  return (
    <Box sx={{ ml: 2 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "15px", mb: 1 }}>
        Team Task Overview
      </Typography>
      <Paper 
        sx={{ 
          width: "98%", 
          height: 300, 
          p: 1, 
          borderRadius: "16px", 
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }}
      >
        <Typography sx={{ color: "gray", mb: 1 }}>Sprint Tasks</Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {sprintData.map((data, index) => (
            <React.Fragment key={data.id}>
              <Divider/>
              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  p: 1
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>{data.name}</Typography>
                  <Typography sx={{color:'gray'}}>{data.task}</Typography>
                </Box>
                <Chip 
                  label={data.status} 
                  color={statusColors[data.status]} 
                  size="small" 
                />
              </Box>
              
              {index !== sprintData.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default SprintTaskOverview;
