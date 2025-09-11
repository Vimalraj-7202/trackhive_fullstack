"use client";
import React, { useState } from "react";
import {
  Box, Typography, Grid, Paper, Chip, Stack, Button, Select, MenuItem, TextField, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";

const employees = ["Ravi", "Priya", "Sara", "John"];
const tLs = ["John", "Priya", "Arjun", "Sara"];
const projects = ["E-commerce App", "Banking Dashboard", "Portfolio Website"];

const ManagerTaskScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "UI Design", description: "Design login page", project: "E-commerce App", assignedTo: "Ravi", role: "Employee", status: "In Progress", priority: "High" },
    { id: 2, title: "API Setup", description: "Setup authentication API", project: "Banking Dashboard", assignedTo: "Priya", role: "TL", status: "To-do", priority: "Medium" },
  ]);

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "", project: "", assignedTo: "", role: "Employee", priority: "" });

  const handleAddTask = () => {
    if(newTask.title && newTask.description && newTask.project && newTask.assignedTo && newTask.priority){
      setTasks([...tasks, { id: tasks.length+1, ...newTask, status:"To-do"}]);
      setNewTask({ title:"", description:"", project:"", assignedTo:"", role:"Employee", priority:"" });
      setOpen(false);
    }
  }

  return (
    <Box sx={{ p: 4, minHeight:"100vh", background:"linear-gradient(135deg,#e1f5fe,#f3e5f5)", position:"relative"}}>
      {/* Dot Pattern */}
      <Box sx={{ position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}} />
      <Typography variant="h4" sx={{ mb:4, fontWeight:"bold"}}>📝 All Tasks</Typography>

      <Button variant="contained" onClick={()=>setOpen(true)} sx={{ mb:3, borderRadius:2, textTransform:"none", background:"linear-gradient(45deg,#42a5f5,#7e57c2)"}}>+ Add Task</Button>

      <Grid container spacing={4}>
        {tasks.map(task=>(
          <Grid size={{xs:12,md:6,lg:4}} key={task.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4,background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Typography variant="h6" sx={{fontWeight:"bold", mb:1}}>{task.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:1}}>{task.description}</Typography>
              <Stack direction="row" spacing={1} sx={{mb:1}}>
                <Chip label={`Project: ${task.project}`} size="small"/>
                <Chip label={`Assigned: ${task.assignedTo} (${task.role})`} size="small"/>
                <Chip label={`Priority: ${task.priority}`} color="secondary" size="small"/>
              </Stack>
              <Chip label={task.status} color={task.status==="Completed"?"success":task.status==="In Progress"?"primary":"default"}/>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add Task Dialog */}
      <Dialog open={open} onClose={()=>setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Assign New Task</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Task Title" value={newTask.title} onChange={e=>setNewTask({...newTask,title:e.target.value})} sx={{my:2}}/>
          <TextField fullWidth label="Description" multiline rows={2} value={newTask.description} onChange={e=>setNewTask({...newTask,description:e.target.value})} sx={{mb:2}}/>
          <Select fullWidth value={newTask.project} onChange={e=>setNewTask({...newTask,project:e.target.value})} displayEmpty sx={{mb:2}}>
            <MenuItem value="" disabled>Select Project</MenuItem>
            {projects.map(p=><MenuItem key={p} value={p}>{p}</MenuItem>)}
          </Select>
          <Select fullWidth value={newTask.role} onChange={e=>setNewTask({...newTask,role:e.target.value})} sx={{mb:2}}>
            <MenuItem value="Employee">Employee</MenuItem>
            <MenuItem value="TL">Team Lead</MenuItem>
          </Select>
          <Select fullWidth value={newTask.assignedTo} onChange={e=>setNewTask({...newTask,assignedTo:e.target.value})} displayEmpty sx={{mb:2}}>
            <MenuItem value="" disabled>Assign To</MenuItem>
            {(newTask.role==="TL"?tLs:employees).map(n=><MenuItem key={n} value={n}>{n}</MenuItem>)}
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
          <Button onClick={handleAddTask} variant="contained">Assign</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
export default ManagerTaskScreen;
