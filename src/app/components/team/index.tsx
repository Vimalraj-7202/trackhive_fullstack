"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManagerTeam from "./ManagerTeam";
import LeadManage from "./LeadManage";
import EmployeeManage from "./EmployeeManage";
import { Box } from "@mui/material";
 

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{overflowY:'auto'}}>
      {role === "project-manager" && <ManagerTeam />}
      {role === "team-lead" && <LeadManage/>}
      {role === "employee" && <EmployeeManage/>}
    </Box>
  );
};

export default index;