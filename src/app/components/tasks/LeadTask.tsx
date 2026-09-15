"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Chip, Stack, Avatar, Button, Select, MenuItem, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const tlTasksInitial = [
  { id:1, title:"Login Page", description:"Design login UI", employee:"Ravi", status:"In Progress", priority:"High", project:"E-commerce App"},
  { id:2, title:"Payment API", description:"Setup payment integration", employee:"Sara", status:"To-do", priority:"Medium", project:"E-commerce App"},
];
const employees = ["Ravi","Sara","John"];

const TLTaskScreen = ()=>{
  const [tasks,setTasks] = useState(tlTasksInitial);
  const [open,setOpen]=useState(false);
  const [newTask,setNewTask]=useState({title:"",description:"",employee:"",priority:"",project:"E-commerce App"});

  const handleAdd=()=>{
    if(newTask.title && newTask.description && newTask.employee && newTask.priority){
      setTasks([...tasks,{id:tasks.length+1,...newTask,status:"To-do"}]);
      setNewTask({title:"",description:"",employee:"",priority:"",project:"E-commerce App"});
      setOpen(false);
    }
  }

  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#f3e5f5,#e1f5fe)", position:"relative"}}>
      <Box sx={{position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}}/>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📝 My Project Tasks</Typography>

      <Button variant="contained" onClick={()=>setOpen(true)} sx={{mb:3, borderRadius:2, textTransform:"none", background:"linear-gradient(45deg,#42a5f5,#7e57c2)"}}>+ Add Task</Button>

      <Grid container spacing={4}>
        {tasks.map(task=>(
          <Grid size={{xs:12,md:6,lg:4}} key={task.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4,background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{fontWeight:"bold", mb:1}}>{task.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:1}}>{task.description}</Typography>
              <Stack direction="row" spacing={1} sx={{mb:1}}>
                <Chip label={`Project: ${task.project}`} size="small"/>
                <Chip label={`Assigned: ${task.employee}`} size="small"/>
                <Chip label={`Priority: ${task.priority}`} color="secondary" size="small"/>
              </Stack>
              <Select fullWidth value={task.status} onChange={(e)=>{
                const updated = tasks.map(t=> t.id===task.id?{...t,status:e.target.value}:t);
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

      <Dialog open={open} onClose={()=>setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Assign New Task</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Task Title" value={newTask.title} onChange={e=>setNewTask({...newTask,title:e.target.value})} sx={{my:2}}/>
          <TextField fullWidth label="Description" multiline rows={2} value={newTask.description} onChange={e=>setNewTask({...newTask,description:e.target.value})} sx={{mb:2}}/>
          <Select fullWidth value={newTask.employee} onChange={e=>setNewTask({...newTask,employee:e.target.value})} displayEmpty sx={{mb:2}}>
            <MenuItem value="" disabled>Select Employee</MenuItem>
            {employees.map(emp=><MenuItem key={emp} value={emp}>{emp}</MenuItem>)}
          </Select>
          <Select fullWidth value={newTask.priority} onChange={e=>setNewTask({...newTask,priority:e.target.value})} displayEmpty>
            <MenuItem value="" disabled>Select Priority</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained">Assign</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
export default TLTaskScreen;
