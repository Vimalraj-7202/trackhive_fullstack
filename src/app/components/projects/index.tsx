"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManageTab from "./ManageTab";
import { Box } from "@mui/material";
import LeadProject from './LeadProject';
import EmployeeProjectScreen from "./EmployeeProject";

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{overflowY:'auto'}}>
      {role === "project-manager" && <ManageTab />}
      {role === "team-lead" && <LeadProject/>}
      {role === "employee" && <EmployeeProjectScreen/>}
    </Box>
  );
};

export default index;
