"use client";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const productivityData = [
  { label: "Completed", value: 45, color: "#4caf50" },
  { label: "In Progress", value: 30, color: "#ff9800" },
  { label: "Pending", value: 20, color: "#9e9e9e" },
  { label: "Overdue", value: 5, color: "#f44336" }
];
const teamPerformanceData = [
  { label: "Team Alpha", value: 40, color: "#42a5f5" }, // Blue
  { label: "Team Beta", value: 25, color: "#66bb6a" },  // Green
  { label: "Team Gamma", value: 20, color: "#ffa726" }, // Orange
  { label: "Team Delta", value: 15, color: "#ab47bc" }, // Purple
];


const chartSettings = {
  margin: { right: 5 },
  width: 400,
  height: 250,
  legend: { hidden: false }
};

const VelocityTrend = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Title */}
      <Typography sx={{ fontWeight: 600, fontSize: "15px", mb: 1 }}>
        Performance Metrics
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Productivity Progress Card */}
        <Paper
          sx={{
            width: "710px",
            height: "300px",
            p: 1,
            backgroundColor: "#f9fafb",
            borderRadius: "16px",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "16px", p: "5px" }}>
            Productivity Progress by overall projects
          </Typography>

          {/* Center PieChart */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PieChart
              series={[
                {
                  innerRadius: 60,
                  outerRadius: 126,
                  paddingAngle: 2,
                  cornerRadius: 6,
                  data: productivityData,
                  arcLabel: (item) => `${item.value}%`,
                },
              ]}
              {...chartSettings}
            />
          </Box>
        </Paper>

        {/* //team performance */}
        <Paper
          sx={{
            width: "710px",
            height: "300px",
            p: 1,
            backgroundColor: "##f3f4f6",
            borderRadius: "16px",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
             <Typography sx={{ color: "gray", fontSize: "16px", p: "5px" }}>
            Team overall Performance 
          </Typography>

          {/* Center PieChart */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PieChart
              series={[
                {
                  innerRadius: 60,
                  outerRadius: 126,
                  paddingAngle: 2,
                  cornerRadius: 6,
                  data: teamPerformanceData,
                  arcLabel: (item) => `${item.value}%`,
                },
              ]}
              {...chartSettings}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default VelocityTrend;
