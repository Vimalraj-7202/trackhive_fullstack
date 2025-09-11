"use client";
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const tlData = [
  { employee:"Ravi", completed:5, pending:3 },
  { employee:"Sara", completed:3, pending:5 },
];

const TLAnalyticsScreen = ()=>{
  return(
    <Box sx={{p:4, minHeight:"100vh", background:"linear-gradient(135deg,#f3e5f5,#e1f5fe)"}}>
      <Typography variant="h4" sx={{mb:4,fontWeight:"bold"}}>📈 TL Analytics</Typography>
      <Grid container spacing={4}>
        <Grid size={{xs:12, md:6}}>
          <Paper elevation={8} sx={{p:3,borderRadius:4, background:"linear-gradient(135deg,#ffffff,#fafafa)"}}>
            <Typography variant="h6" sx={{mb:2}}>Employee Task Completion</Typography>
            <BarChart width={400} height={250} data={tlData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="employee"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey="completed" fill="#4caf50"/>
              <Bar dataKey="pending" fill="#ff9800"/>
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TLAnalyticsScreen;
