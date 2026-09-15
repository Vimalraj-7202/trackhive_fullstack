import { Box, Paper, Typography, Stack, LinearProgress } from "@mui/material";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

// Sample sprint data
const sprintData = [
  { id: 1, name: "Alice", task: "Fix login validation issue", status: "In Progress" },
  { id: 2, name: "Shelby", task: "Write unit testcases", status: "Todo" },
  { id: 3, name: "Merlin", task: "Update Dashboard UI", status: "Done" },
  { id: 4, name: "Vimal", task: "Revamp settings page", status: "In Review" },
  { id: 5, name: "Vimal", task: "DevOps Routing issue", status: "In Review" },
];

const totalTasks = sprintData.length;
const completedTasks = sprintData.filter(task => task.status === "Done").length;
const inProgressTasks = sprintData.filter(task => task.status === "In Progress").length;
const remainingTasks = totalTasks - completedTasks;
const progressPercent = Math.round((completedTasks / totalTasks) * 100);

// Modern burndown data
const burndownData = [
  { day: "Mon", remaining: totalTasks, ideal: totalTasks },
  { day: "Tue", remaining: totalTasks - 1, ideal: totalTasks - 1.2 },
  { day: "Wed", remaining: totalTasks - 2, ideal: totalTasks - 2.4 },
  { day: "Thu", remaining: totalTasks - 3, ideal: totalTasks - 3.6 },
  { day: "Fri", remaining: remainingTasks, ideal: 0 },
];

const SprintProgress = () => {
  return (
    <Box sx={{ ml: 2, mt: 2 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "15px", mb: 1 }}>
        Sprint Progress
      </Typography>

      {/* Metrics */}
      <Paper sx={{ width: "97%", p: 2, borderRadius: "16px", mb: 2 }}>
        <Stack direction="row" spacing={4} justifyContent="space-around">
          <Box textAlign="center">
            <Typography>Total Tasks</Typography>
            <Typography fontWeight="bold">{totalTasks}</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>Completed</Typography>
            <Typography fontWeight="bold">{completedTasks}</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>In Progress</Typography>
            <Typography fontWeight="bold">{inProgressTasks}</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>Remaining</Typography>
            <Typography fontWeight="bold">{remainingTasks}</Typography>
          </Box>
        </Stack>

        {/* Gradient Progress Bar */}
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 1 }}>Overall Completion</Typography>
          <LinearProgress
            variant="determinate"
            value={progressPercent}
            sx={{
              height: 12,
              borderRadius: 6,
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundImage: 'linear-gradient(90deg, #4caf50, #2196f3, #fbc02d)',
              }
            }}
          />
          <Typography sx={{ textAlign: "right", mt: 0.5 }}>{progressPercent}%</Typography>
        </Box>
      </Paper>

      {/* Modern Burndown / Area Chart */}
        <Typography sx={{ fontWeight: 'bold', mb: 1,fontSize:'15px' }}>Sprint Burndown Chart</Typography>
      <Paper sx={{ width: "97%", height: 300, p: 2, borderRadius: "16px" }}>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart data={burndownData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorRemaining" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1976d2" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#1976d2" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorIdeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4caf50" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#4caf50" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fill: '#555', fontSize: 12, fontWeight: 500 }} />
            <YAxis tick={{ fill: '#555', fontSize: 12 }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Area 
              type="monotone" 
              dataKey="remaining" 
              name="Tasks Remaining" 
              stroke="#1976d2" 
              strokeWidth={3} 
              fill="url(#colorRemaining)" 
              activeDot={{ r: 6 }}
            />
            <Area 
              type="monotone" 
              dataKey="ideal" 
              name="Ideal Progress" 
              stroke="#4caf50" 
              strokeWidth={3} 
              fill="url(#colorIdeal)" 
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default SprintProgress;
