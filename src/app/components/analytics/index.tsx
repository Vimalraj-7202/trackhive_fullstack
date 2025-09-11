"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManagerAnalytics from "./ManagerAnalytics";
import { Box } from "@mui/material";
import LeadAnalytics from "./LeadAnalytics";
import EmployeeAnalytics from "./EmployeeAnalytics";

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{overflowY:'auto'}}>
      {role === "project-manager" && <ManagerAnalytics />}
      {role === "team-lead" && <LeadAnalytics/>}
      {role === "employee" && <EmployeeAnalytics/>}
    </Box>
  );
};

export default index;
