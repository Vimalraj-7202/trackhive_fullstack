"use client";
import React from "react";
import { Box, Typography, Grid, Paper, LinearProgress, Chip, Avatar, Stack } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const managerProjects = [
  { id: 1, name: "E-commerce App", tl: "Priya", status: "Active", completion: 60 },
  { id: 2, name: "Banking Dashboard", tl: "Arjun", status: "At Risk", completion: 30 },
  { id: 3, name: "Portfolio Website", tl: "Sara", status: "Completed", completion: 100 },
];

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Project', flex: 1 },
  { field: 'tl', headerName: 'Team Lead', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1, renderCell: (params:any) => (
    <Chip label={params.value} color={params.value==="Active"?"primary":params.value==="At Risk"?"warning":"success"} size="small"/>
  ) },
  { field: 'completion', headerName: 'Completion', flex: 1, renderCell: (params:any) => (
    <Box sx={{width:"100%"}}>
      <LinearProgress variant="determinate" value={params.value} sx={{height:8,borderRadius:2}}/>
      <Typography variant="caption">{params.value}%</Typography>
    </Box>
  ) },
];

const ManagerReportsScreen = ()=>{
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#e1f5fe,#f3e5f5)", position:"relative"}}>
      <Box sx={{position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}}/>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📊 Manager Reports</Typography>

      <Grid container spacing={4}>
        <Grid size={{xs:12,md:6}}>
          <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
            <Typography variant="h6" sx={{mb:2,fontWeight:"bold"}}>Project Overview</Typography>
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid rows={managerProjects} columns={columns} hideFooter />
            </div>
          </Paper>
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
            <Typography variant="h6" sx={{mb:2,fontWeight:"bold"}}>Team Performance</Typography>
            {managerProjects.map(proj=>(
              <Box key={proj.id} sx={{mb:2}}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{mb:1}}>
                  <Avatar>{proj.tl[0]}</Avatar>
                  <Typography>{proj.tl} - {proj.name}</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={proj.completion} sx={{height:8,borderRadius:2}}/>
                <Typography variant="caption">{proj.completion}% Completed</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ManagerReportsScreen;
