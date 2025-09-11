"use client";
import React from "react";
import { Box, Typography, Grid, Paper, Avatar, Stack, Chip } from "@mui/material";

const employeeTeam = [
  { id:1, name:"Ravi", role:"Employee", project:"E-commerce App" },
  { id:2, name:"Sara", role:"Employee", project:"E-commerce App" },
  { id:3, name:"Priya", role:"TL", project:"E-commerce App" },
];

const EmployeeTeamScreen = ()=>{
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#fff8e1,#e0f7fa)", position:"relative"}}>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>👥 Team Members</Typography>
      <Grid container spacing={3}>
        {employeeTeam.map(member=>(
          <Grid size={{xs:12,md:6,lg:4}} key={member.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{mb:1}}>
                <Avatar>{member.name[0]}</Avatar>
                <Box>
                  <Typography fontWeight="bold">{member.name}</Typography>
                  <Typography variant="caption">{member.role}</Typography>
                </Box>
              </Stack>
              <Chip label={`Project: ${member.project}`} size="small"/>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default EmployeeTeamScreen;
