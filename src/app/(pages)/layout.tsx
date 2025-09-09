import React from 'react';
import Sidebar from '@/app/components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import { Box } from '@mui/material';

const Layout = ({ children }: any) => {
  return (
    <Box
      sx={{
        height: '97.5vh',
        maxHeight: 'calc(100vh - 4px)',
        width:'100%',
        overflow: 'hidden',
        bgcolor: '#fff',
        display: 'flex',
        boxSizing: 'border-box',
        gap:'6px'
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: '68px',
          background:'linear-gradient(190deg, #601b9f 0%, #043238ff 70%, teal 90%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          flexShrink: 0
        }}
      >
        <Sidebar />
        
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor:'#efeeff'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
