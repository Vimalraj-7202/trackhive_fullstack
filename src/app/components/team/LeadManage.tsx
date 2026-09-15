"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Avatar, Stack, Button, Chip } from "@mui/material";

const tlTeam = [
  { id:1, name:"Ravi", email:"ravi@example.com", status:"In Progress", project:"E-commerce App" },
  { id:2, name:"Sara", email:"sara@example.com", status:"To-do", project:"E-commerce App" },
];

const TLTeamScreen = ()=>{
  const [team,setTeam] = useState(tlTeam);

  return(
    <Box sx={{p:4,minHeight:"100vh", background:"linear-gradient(135deg,#f3e5f5,#e1f5fe)", position:"relative"}}>
      <Box sx={{position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}}/>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>👥 My Team</Typography>
      <Grid container spacing={3}>
        {team.map(member=>(
          <Grid size={{xs:12,md:6,lg:4}} key={member.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4,background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{mb:1}}>
                <Avatar>{member.name[0]}</Avatar>
                <Box>
                  <Typography fontWeight="bold">{member.name}</Typography>
                  <Typography variant="caption">{member.email}</Typography>
                </Box>
              </Stack>
              <Chip label={`Project: ${member.project}`} size="small" sx={{mb:1}}/>
              <Chip label={`Status: ${member.status}`} size="small" color={member.status==="In Progress"?"primary":"default"} sx={{mb:1}}/>
              <Button variant="outlined" size="small" sx={{textTransform:"none"}}>Assign Task</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default TLTeamScreen;
