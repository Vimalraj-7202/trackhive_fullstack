'use client';
import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
<Box
  sx={{
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pl:1,
    pr: 3,
    bgcolor: '#f3f4f6',
    borderRadius:'4px',
    borderBottom: '1px solid #e0e0e0',
    position: 'fixed',
    top: 0,
    left: '0px',
    right: 0,
    zIndex: 1000,
  }}
>

      {/* Left side */}
      <Typography variant="h6" fontWeight="bold">
        Home
      </Typography>

      {/* Right side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Box textAlign="right">
          <Typography sx={{color:'gray',fontSize:'12px'}}>Vimalraj S</Typography>
          <Typography sx={{color:'black',fontSize:'11px',fontWeight:'bold'}}>
            Employee
          </Typography>
        </Box>
        <Avatar src="https://i.pravatar.cc/150?img=1" />
      </Box>
    </Box>
  );
};

export default Topbar;
