"use client";
import React from "react";
import { Box, Typography, Grid, Paper, LinearProgress, Chip, Stack, Avatar, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const tlProjects = [
  { id: 1, name: "E-commerce App", description: "Shopping platform", deadline: "2025-09-30", progress: 60, status: "Active", team: ["Ravi","Sara"] },
  { id: 2, name: "Banking Dashboard", description: "Analytics dashboard", deadline: "2025-10-15", progress: 30, status: "At Risk", team: ["John"] },
];

const TLProjectScreen = () => {
  const router = useRouter();
  const handleManageTasks = (projectId:number)=>router.push(`/tl/assign/${projectId}`);
  return (
    <Box sx={{ p:4, minHeight:"100vh", background:"linear-gradient(135deg,#f3e5f5,#e1f5fe)", position:"relative", overflow:"hidden" }}>
      <Box sx={{ position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}} />
      <Typography variant="h4" sx={{ mb:4, fontWeight:"bold"}}>📂 My Projects</Typography>
      <Grid container spacing={4}>
        {tlProjects.map(project=>(
          <Grid size={{xs:12,md:6,lg:4}} key={project.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4,background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{fontWeight:"bold",mb:1}}>{project.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:2}}>{project.description}</Typography>
              <Stack direction="row" spacing={1} sx={{mb:2}}>
                <Chip label={project.status} color={project.status==="Active"?"primary":"warning"} size="small"/>
                <Chip label={`Deadline: ${project.deadline}`} variant="outlined" size="small"/>
              </Stack>
              <LinearProgress variant="determinate" value={project.progress} sx={{borderRadius:2,height:8,mb:2}}/>
              <Typography variant="caption" sx={{display:"block", mb:2}}>{project.progress}% Completed</Typography>
              <Typography variant="subtitle2" sx={{mb:1}}>👥 Team Members:</Typography>
              <Stack direction="row" spacing={1} sx={{mb:3}}>{project.team.map((m,idx)=><Avatar key={idx}>{m[0]}</Avatar>)}</Stack>
              <Button variant="contained" fullWidth sx={{borderRadius:2,textTransform:"none", background:"linear-gradient(45deg,#42a5f5,#7e57c2)"}} onClick={()=>handleManageTasks(project.id)}>Manage Tasks</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default TLProjectScreen;
