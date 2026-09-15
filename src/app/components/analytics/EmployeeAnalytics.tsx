"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const empData = [
  { day:"Mon", completed:2 },
  { day:"Tue", completed:1 },
  { day:"Wed", completed:3 },
  { day:"Thu", completed:1 },
  { day:"Fri", completed:4 },
];

const EmployeeAnalyticsScreen = ()=>{
  return(
    <Box sx={{p:4,minHeight:"100vh", background:"linear-gradient(135deg,#fff8e1,#e0f7fa)"}}>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📈 My Analytics</Typography>
      <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
        <Typography variant="h6" sx={{mb:2}}>Task Completion Trend</Typography>
        <LineChart width={500} height={300} data={empData}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="day"/>
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="completed" stroke="#42a5f5"/>
        </LineChart>
      </Paper>
    </Box>
  )
}

export default EmployeeAnalyticsScreen;
