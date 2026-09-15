"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Avatar, Stack, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, MenuItem, Select } from "@mui/material";

const initialTLs = [
  { id:1, name:"Priya", email:"priya@example.com", projects:["E-commerce App","Banking Dashboard"] },
  { id:2, name:"Arjun", email:"arjun@example.com", projects:["Portfolio Website"] },
];

const initialEmployees = [
  { id:1, name:"Ravi", email:"ravi@example.com", assignedTL:"Priya" },
  { id:2, name:"Sara", email:"sara@example.com", assignedTL:"Arjun" },
];

const ManagerTeamScreen = ()=>{
  const [tLs,setTLs] = useState(initialTLs);
  const [employees,setEmployees] = useState(initialEmployees);
  const [open,setOpen]=useState(false);
  const [newMember,setNewMember]=useState({name:"",email:"",role:"Employee",tl:""});

  const handleAddMember = ()=>{
    if(newMember.name && newMember.email){
      if(newMember.role==="TL"){
        setTLs([...tLs,{id:tLs.length+1,name:newMember.name,email:newMember.email,projects:[]}])
      } else {
        setEmployees([...employees,{id:employees.length+1,name:newMember.name,email:newMember.email,assignedTL:newMember.tl}])
      }
      setNewMember({name:"",email:"",role:"Employee",tl:""});
      setOpen(false);
    }
  }

  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#e1f5fe,#f3e5f5)", position:"relative"}}>
      {/* Dot Pattern */}
      <Box sx={{position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}}/>
      
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>👥 Team Management</Typography>
      <Button variant="contained" onClick={()=>setOpen(true)} sx={{mb:3,textTransform:"none",borderRadius:2, background:"linear-gradient(45deg,#42a5f5,#7e57c2)"}}>+ Add Member</Button>

      <Typography variant="h5" sx={{mb:2}}>Team Leads</Typography>
      <Grid container spacing={3}>
        {tLs.map(tl=>(
          <Grid size={{xs:12,md:6,lg:4}} key={tl.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{mb:1}}>
                <Avatar>{tl.name[0]}</Avatar>
                <Box>
                  <Typography fontWeight="bold">{tl.name}</Typography>
                  <Typography variant="caption">{tl.email}</Typography>
                </Box>
              </Stack>
              <Typography variant="body2" sx={{mb:1}}>Projects: {tl.projects.join(", ") || "None"}</Typography>
              <Button variant="outlined" size="small" color="error" sx={{textTransform:"none"}} onClick={()=>setTLs(tLs.filter(t=>t.id!==tl.id))}>Remove</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{my:2}}>Employees</Typography>
      <Grid container spacing={3}>
        {employees.map(emp=>(
          <Grid size={{xs:12,md:6,lg:4}} key={emp.id}>
            <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{mb:1}}>
                <Avatar>{emp.name[0]}</Avatar>
                <Box>
                  <Typography fontWeight="bold">{emp.name}</Typography>
                  <Typography variant="caption">{emp.email}</Typography>
                </Box>
              </Stack>
              <Typography variant="body2" sx={{mb:1}}>Assigned TL: {emp.assignedTL}</Typography>
              <Button variant="outlined" size="small" color="error" sx={{textTransform:"none"}} onClick={()=>setEmployees(employees.filter(e=>e.id!==emp.id))}>Remove</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add Member Dialog */}
      <Dialog open={open} onClose={()=>setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add New Member</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" value={newMember.name} onChange={e=>setNewMember({...newMember,name:e.target.value})} sx={{my:2}}/>
          <TextField fullWidth label="Email" value={newMember.email} onChange={e=>setNewMember({...newMember,email:e.target.value})} sx={{mb:2}}/>
          <Select fullWidth value={newMember.role} onChange={e=>setNewMember({...newMember,role:e.target.value})} sx={{mb:2}}>
            <MenuItem value="TL">Team Lead</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddMember}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ManagerTeamScreen;
