'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import ViewProject from './ViewProject';
import ViewAssign from './ViewAssign';

function ManageTab() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="Projects" />
        <Tab label="Teams" />
      </Tabs>

      {/* Tab Panels */}
      {value === 0 && (
        <Box sx={{ p: 2 }}>
          <ViewProject/>
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 2 }}>
          <ViewAssign/>
        </Box>
      )}
    </Box>
  );
}

export default ManageTab;
