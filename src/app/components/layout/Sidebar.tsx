import React from "react";
import { Box } from "@mui/material";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const iconSize=28;

const Sidebar = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:7}}>
      <SpaceDashboardOutlinedIcon sx={{ color: "white",fontSize:iconSize}} />
      <WorkOutlineOutlinedIcon sx={{color:'white',fontSize:iconSize}}/>
      <AssignmentOutlinedIcon sx={{color:'white',fontSize:iconSize}}/>
      <GroupsOutlinedIcon sx={{color:'white',fontSize:iconSize}}/>
      <SettingsOutlinedIcon sx={{color:'white',fontSize:iconSize}}/>
      <NotificationsActiveOutlinedIcon sx={{color:'white',fontSize:iconSize}}/>
      <LogoutOutlinedIcon sx={{color:'white',fontSize:iconSize}}/>
    </Box>
  );
};

export default Sidebar;
