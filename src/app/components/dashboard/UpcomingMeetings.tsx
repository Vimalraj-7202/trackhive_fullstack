import { Box, Typography, Divider } from '@mui/material';
import React from 'react';

const UpcomingData = [
  { title: 'Daily StandUp', subtitle: 'Web Team', time: '10:30 AM' },
  { title: 'Sprint Planning', subtitle: 'Backend Team', time: '12:00 PM' },
  { title: 'Design Review', subtitle: 'UI/UX Team', time: '02:00 PM' },
  { title: 'Client Meeting', subtitle: 'Project Alpha', time: '04:00 PM' },
];

const UpcomingMeetings = () => {
  return (
    <Box sx={{ p: 1.2 }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '15px', mb: 1 }}>
        Upcoming Meetings
      </Typography>
      <Box
        sx={{
          width: '98%',
          height: 210,
          borderRadius: '16px',
          mt: 1,
          p: 2,
          overflowY: 'auto',
          backgroundColor: '#f9f9f9',
        }}
      >
        {UpcomingData.map((meeting, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>{meeting.title}</Typography>
                <Typography sx={{ fontSize: 12, color: 'gray' }}>{meeting.subtitle}</Typography>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: 12, color: 'gray' }}>
                {meeting.time}
              </Typography>
            </Box>
            {index !== UpcomingData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default UpcomingMeetings;
