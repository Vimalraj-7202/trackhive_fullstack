"use client";
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const projectTrend = [
  { week: "Week 1", completed: 5, pending: 10 },
  { week: "Week 2", completed: 8, pending: 7 },
  { week: "Week 3", completed: 12, pending: 3 },
  { week: "Week 4", completed: 15, pending: 2 },
];

const taskDistribution = [
  { name: "Completed", value: 40 },
  { name: "In Progress", value: 30 },
  { name: "Pending", value: 30 },
];

const COLORS = ["#4caf50", "#42a5f5", "#ff9800"];

const ManagerAnalyticsScreen = ()=>{
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#e1f5fe,#f3e5f5)", position:"relative"}}>
      <Box sx={{position:"absolute", right:0, top:0, height:"100%", width:150, backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize:"20px 20px"}}/>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📈 Manager Analytics</Typography>

      <Grid container spacing={4}>
        <Grid size={{xs:12,md:6}}>
          <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
            <Typography variant="h6" sx={{mb:2,fontWeight:"bold"}}>Project Completion Trend</Typography>
            <LineChart width={400} height={250} data={projectTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#4caf50" />
              <Line type="monotone" dataKey="pending" stroke="#ff9800" />
            </LineChart>
          </Paper>
        </Grid>

        <Grid size={{xs:12,md:6}}>
          <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
            <Typography variant="h6" sx={{mb:2,fontWeight:"bold"}}>Task Status Distribution</Typography>
            <PieChart width={400} height={250}>
              <Pie data={taskDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {taskDistribution.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ManagerAnalyticsScreen;
