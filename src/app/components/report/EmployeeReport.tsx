"use client";
import React from "react";
import { Box, Typography, Paper, LinearProgress, Grid, Chip } from "@mui/material";

const employeeTasks = [
  { id:1, task:"Login Page", project:"E-commerce App", status:"In Progress", completion:60 },
  { id:2, task:"Payment API", project:"E-commerce App", status:"To-do", completion:20 },
];

const EmployeeReportsScreen = ()=>{
  return(
    <Box sx={{p:4,minHeight:"100vh", background:"linear-gradient(135deg,#fff8e1,#e0f7fa)"}}>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📊 My Reports</Typography>
      <Grid container spacing={4}>
        {employeeTasks.map(task=>(
          <Grid size={{xs:12,md:6}} key={task.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{mb:1}}>{task.task}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:1}}>Project: {task.project}</Typography>
              <Chip label={task.status} size="small" color={task.status==="In Progress"?"primary":"default"} sx={{mb:1}}/>
              <LinearProgress variant="determinate" value={task.completion} sx={{height:8,borderRadius:2}}/>
              <Typography variant="caption">{task.completion}% Completed</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default EmployeeReportsScreen;
