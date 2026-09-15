'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useAppSelector } from '@/app/store/store';
import { usePathname } from 'next/navigation';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Topbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const storedPic = localStorage.getItem('profilePic');
    if (storedPic) {
      setProfilePic(storedPic);
    }
  }, []);

  const getPageName = (path: string): string => {
    if (path === '/') return 'Home';
    const segments = path.split('/').filter(Boolean);
    return segments
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' / ');
  };

  const pageTitle = getPageName(pathname);

  return (
    <Box
      sx={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        mt: '2px',
        bgcolor: 'white',
        color: 'black',
        borderRadius: '8px',
      }}
    >
      <Typography fontWeight="bold" sx={{ color: 'black' }}>
        {pageTitle}
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <NotificationsActiveOutlinedIcon sx={{ color: 'gray', fontSize: '30px' }} />
        <Avatar
          src={
            profilePic ||
            'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60'
          }
          alt={user?.name || 'Profile'}
        />
        <Box display="flex" flexDirection="column" alignItems="flex-start" ml={1}>
          <Typography fontSize="0.875rem" fontWeight={500}>
            {user?.name || 'Guest User'}
          </Typography>
          <Typography fontSize="0.75rem" color="gray">
            {user?.role
              ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
              : 'Employee'}

          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
