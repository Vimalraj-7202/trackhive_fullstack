'use client'
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManagerTaskScreen from "./ManagerTask";
import { Box } from "@mui/material";
import LeadTask from './LeadTask';
import EmployeeTaskScreen from "./EmployeeTask";

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{overflowY:'auto'}}>
      {role === "project-manager" && <ManagerTaskScreen />}
      {role === "team-lead" && <LeadTask/>}
      {role === "employee" && <EmployeeTaskScreen/>}
    </Box>
  );
};

export default index;
