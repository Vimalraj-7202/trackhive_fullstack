"use client";
import React from "react";
import GridDashboard from "./GridDashboard";
import TeamPerformance from "./TeamPerformance";
import RiskByFunction from "./RiskByFunction";
import { Box } from "@mui/material";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import SprintTaskOverview from "./SprintTaskOverview";
import SprintProgress from "./SprintProgress";
import MyTaskList from "./MyTaskList";
import UpcomingMeetings from "./UpcomingMeetings";

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <Box sx={{ overflowY: "auto" }}>
      <GridDashboard />
      {/* Manager */}

      {role === "project-manager" && (
        <>
          <TeamPerformance />
          <RiskByFunction />
        </>
      )}

      {/* //team lead */}
      {role === "team-lead" && (
        <>
          <SprintTaskOverview />
          <SprintProgress />
        </>
      )}

      {/* employee */}
      {role === "employee" && (
        <>
          <MyTaskList />
          <UpcomingMeetings />
        </>
      )}
    </Box>
  );
};

export default index;
