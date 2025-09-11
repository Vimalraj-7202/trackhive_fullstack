"use client";
import React from "react";
import { Box, Typography, Grid, Paper, LinearProgress, Chip, Stack } from "@mui/material";

const employeeProjects = [
  { id:1, name:"E-commerce App", description:"Shopping platform", deadline:"2025-09-30", progress:60, status:"Active", tl:"Priya" },
  { id:2, name:"Banking Dashboard", description:"Analytics dashboard", deadline:"2025-10-15", progress:30, status:"Active", tl:"Priya" },
];

const EmployeeProjectScreen = ()=>{
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#fff8e1,#e0f7fa)", position:"relative"}}>
      <Typography variant="h4" sx={{mb:4, fontWeight:"bold"}}>📂 My Projects</Typography>
      <Grid container spacing={4}>
        {employeeProjects.map(project=>(
          <Grid size ={{xs:12,md:6,lg:4}} key={project.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{fontWeight:"bold", mb:1}}>{project.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:2}}>{project.description}</Typography>
              <Stack direction="row" spacing={1} sx={{mb:1}}>
                <Chip label={project.status} color={project.status==="Active"?"primary":"default"} size="small"/>
                <Chip label={`Deadline: ${project.deadline}`} variant="outlined" size="small"/>
                <Chip label={`TL: ${project.tl}`} variant="outlined" size="small"/>
              </Stack>
              <LinearProgress variant="determinate" value={project.progress} sx={{borderRadius:2,height:8,mb:1}}/>
              <Typography variant="caption">{project.progress}% Completed</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default EmployeeProjectScreen;
