'use client'
import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const riskTrendData = [
  { month: 'Jan', development: 12, qa: 8, design: 5, operations: 4 },
  { month: 'Feb', development: 15, qa: 10, design: 7, operations: 6 },
  { month: 'Mar', development: 18, qa: 9, design: 6, operations: 5 },
  { month: 'Apr', development: 14, qa: 12, design: 8, operations: 7 },
  { month: 'May', development: 20, qa: 11, design: 7, operations: 6 },
  { month: 'Jun', development: 22, qa: 10, design: 9, operations: 8 },
];

export default function RiskByFunction() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ fontWeight: 600, fontSize: '15px', mb: 1 }}>
        Risk By Function (Trend)
      </Typography>
      <Paper
        sx={{
          width: '100%',
          height: '350px',
          borderRadius: '16px',
          p:0,
          backgroundColor: '#f9fafb',
        }}
      >
        <LineChart
          dataset={riskTrendData}
          xAxis={[{ dataKey: 'month', scaleType: 'point' }]}
          series={[
            { dataKey: 'development', label: 'Development', color: '#ef4444' },
            { dataKey: 'qa', label: 'QA', color: '#f97316' },                  
            { dataKey: 'design', label: 'Design', color: '#3b82f6' },         
            { dataKey: 'operations', label: 'Operations', color: '#22c55e' }, 
          ]}
          width={1440}
          height={300}
          grid={{ vertical: true, horizontal: true }}
        />
      </Paper>
    </Box>
  );
}
