"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManagerReport from "./ManagerReport";
import { Box } from "@mui/material";
import LeadReport from "./LeadReport";
import EmployeeReport from "./EmployeeReport";

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{overflowY:'auto'}}>
      {role === "project-manager" && <ManagerReport />}
      {role === "team-lead" && <LeadReport/>}
      {role === "employee" && <EmployeeReport/>}
    </Box>
  );
};

export default index;
