import { Box, Paper, Typography, Chip } from '@mui/material';
import React, { useState } from 'react';

type Task = {
  id: number;
  title: string;
  dueDate: string;
  status: 'Todo' | 'In Progress' | 'Done'|'In Review';
};

const initialTasks: Task[] = [
  { id: 1, title: 'Fix login bug', dueDate: '2025-09-12', status: 'Todo' },
  { id: 2, title: 'Write unit tests', dueDate: '2025-09-14', status: 'In Progress' },
  { id: 3, title: 'Update Dashboard UI', dueDate: '2025-09-15', status: 'Done' },
  { id: 4, title: 'Revamp settings page', dueDate: '2025-09-16', status: 'In Progress' },
  { id: 5, title: 'Document APIs', dueDate: '2025-09-18', status: 'In Review' },
];

const statusColors: Record<string, string> = {
  'Todo': '#f1f5f9',
  'In Progress': '#fef3c7',
  'Done': '#d1fae5',
  'In Review':'#e0f2fe'
};

const MyTaskList = () => {
  const [tasks] = useState<Task[]>(initialTasks);

  return (
    <Box sx={{ p: 1.2}}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '15px', mb:1 }}>My Task List</Typography>
      <Paper sx={{ width: '98%', height: 300, borderRadius: '16px', mt: 1, p: 2, overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {tasks.map((task) => (
            <Paper
              key={task.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                boxShadow: 1,
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              {/* Colored side bar */}
              <Box sx={{ width: 6, height: '100%', backgroundColor: statusColors[task.status] }} />
              
              {/* Task details */}
              <Box sx={{ p: 2, flex: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>{task.title}</Typography>
                <Typography sx={{ fontSize: 12, color: 'gray' }}>Due: {task.dueDate}</Typography>
              </Box>

              {/* Status chip */}
              <Box sx={{ pr: 2 }}>
                <Chip
                  label={task.status}
                  sx={{
                    backgroundColor: statusColors[task.status],
                    color: 'black',
                    fontSize: 12,
                  }}
                  size="small"
                />
              </Box>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default MyTaskList;
