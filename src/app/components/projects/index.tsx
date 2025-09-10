"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManageTab from "./ManageTab";
import LeadTab from "./LeadTab";
import ViewTab from './ViewTab'
import { Box } from "@mui/material";

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{overflowY:'auto'}}>
      {role === "project-manager" && <ManageTab />}
      {role === "team-lead" && <LeadTab />}
      {role === "employee" && <ViewTab />}
    </Box>
  );
};

export default index;
