"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Chip, Stack, Select, MenuItem } from "@mui/material";

const employeeTasksInitial = [
  { id:1, title:"Login Page", description:"Design login UI", project:"E-commerce App", status:"In Progress", priority:"High"},
  { id:2, title:"Payment API", description:"Setup payment integration", project:"E-commerce App", status:"To-do", priority:"Medium"},
];

const EmployeeTaskScreen = ()=>{
  const [tasks,setTasks] = useState(employeeTasksInitial);
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#fff8e1,#e0f7fa)", position:"relative"}}>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📝 My Tasks</Typography>
      <Grid container spacing={4}>
        {tasks.map(task=>(
          <Grid size={{xs:12,md:6,lg:4}} key={task.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4,background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{fontWeight:"bold", mb:1}}>{task.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:1}}>{task.description}</Typography>
              <Stack direction="row" spacing={1} sx={{mb:1}}>
                <Chip label={`Project: ${task.project}`} size="small"/>
                <Chip label={`Priority: ${task.priority}`} color="secondary" size="small"/>
              </Stack>
              <Select fullWidth value={task.status} onChange={(e)=>{
                const updated = tasks.map(t=>t.id===task.id?{...t,status:e.target.value}:t);
                setTasks(updated);
              }} size="small">
                <MenuItem value="To-do">To-do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default EmployeeTaskScreen;
