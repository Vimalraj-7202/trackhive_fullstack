"use client";
import React from "react";
import { Box, Typography, Grid, Paper, LinearProgress, Chip } from "@mui/material";

const tlTasks = [
  { id:1, task:"Login Page", employee:"Ravi", status:"In Progress", project:"E-commerce App", completion:60 },
  { id:2, task:"Payment API", employee:"Sara", status:"To-do", project:"E-commerce App", completion:20 },
];

const TLReportsScreen = ()=>{
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#f3e5f5,#e1f5fe)", position:"relative"}}>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📊 TL Reports</Typography>
      <Grid container spacing={4}>
        {tlTasks.map(task=>(
          <Grid size={{xs:12,md:6}} key={task.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{mb:1}}>{task.task}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:1}}>Employee: {task.employee}</Typography>
              <Chip label={task.status} color={task.status==="In Progress"?"primary":"default"} size="small" sx={{mb:1}}/>
              <LinearProgress variant="determinate" value={task.completion} sx={{height:8,borderRadius:2}}/>
              <Typography variant="caption">{task.completion}% Completed</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default TLReportsScreen;
