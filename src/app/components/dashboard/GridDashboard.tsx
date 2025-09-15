"use client";
import React, { useEffect } from "react";
import { Box, Typography, Avatar, } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "@/app/store/dashboard/dashboard.thunk";
import { RootState, AppDispatch } from "@/app/store/store";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import GroupsIcon from "@mui/icons-material/Groups";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import IncompleteCircleOutlinedIcon from "@mui/icons-material/IncompleteCircleOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {DashboardData,ManagerDashboard,TeamLeadDashboard,EmployeeDashboard} from "@/app/Types/dashboard.type";
import { DarkMode } from "@mui/icons-material";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.dashboard);
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Typography variant="h6">Loading dashboard...</Typography>
      </Box>
    );

  if (error)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );

  if (!data)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Typography variant="h6">No dashboard data found</Typography>
      </Box>
    );

  const { role, dashboard } = data as DashboardData;

  const renderCards = () => {
    switch (role) {
      case "admin":
        const pm = dashboard as ManagerDashboard;
        return (
          // <--------------------project manager-------------------------------->
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              flexWrap: "nowrap",
              overflowX: "auto",
              py: 1,
              px: 1,
            }}
          >
            {/* Active Projects */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 250,
                p: 2,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Icon in top-left rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #3b8ca5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <WorkOutlineOutlinedIcon
                  sx={{ color: "#3b8ca5", fontSize: 22 }}
                />
              </Box>

              {/* Label and Value row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#3b8ca5", fontWeight: 500, fontSize: 14 }}
                >
                  Active Projects
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {pm.activeProjects}
                </Typography>
              </Box>

              {/* Dotted Pattern on right */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-active-projects"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#3b8ca5" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="140"
                  fill="url(#dots-active-projects)"
                />
              </Box>
            </Box>

            {/* Active Sprints */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #fff3e0 0%, #ffb74d 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 250,
                p: 2,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Icon in top-left rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid orange",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "transparent",
                }}
              >
                <WorkspacesOutlinedIcon
                  sx={{ color: "orange", fontSize: 22 }}
                />
              </Box>

              {/* Label and Value row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "orange", fontWeight: 500, fontSize: 14 }}
                >
                  Active Sprints
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {pm.activeSprints}
                </Typography>
              </Box>

              {/* Dotted Pattern on right */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-activesprints"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="orange" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="140"
                  fill="url(#dots-activesprints)"
                />
              </Box>
            </Box>

            {/* Avg Velocity */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #fff3e0 0%, #174d3d 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 250,
                p: 2,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Icon in top-left rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1px solid #75907f",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "transparent",
                }}
              >
                <TimelineOutlinedIcon sx={{ color: "#75907f", fontSize: 22 }} />
              </Box>

              {/* Label and Value row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#174d3d", fontWeight: 500, fontSize: 14 }}
                >
                  Avg Velocity
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {pm.avgVelocity}
                </Typography>
              </Box>

              {/* Dotted Pattern on right */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-avgvelocity"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="orange" />
                  </pattern>
                </defs>
                <rect width="100" height="140" fill="url(#dots-avgvelocity)" />
              </Box>
            </Box>

            {/* At Risk Projects */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #ffebee 0%, #ef9a9a 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 250,
                p: 2,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Icon in top-left rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #ef5350",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "#fbe9e7",
                }}
              >
                <DangerousOutlinedIcon
                  sx={{ color: "#ef5350", fontSize: 22 }}
                />
              </Box>

              {/* Label and Value row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#ef5350", fontWeight: 500, fontSize: 14 }}
                >
                  At Risk Projects
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {pm.atRiskProjects}
                </Typography>
              </Box>

              {/* Dotted Pattern on right */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-atriskprojects"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#ef9a9a" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="140"
                  fill="url(#dots-atriskprojects)"
                />
              </Box>
            </Box>

            {/* Completed Projects */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #e8f5e9 0%, #81c784 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 250,
                p: 2,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Icon in top-left rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #66bb6a",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "#dcedc8",
                }}
              >
                <TaskAltOutlinedIcon sx={{ color: "#66bb6a", fontSize: 22 }} />
              </Box>

              {/* Label and Value row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#66bb6a", fontWeight: 500, fontSize: 14 }}
                >
                  Completed Projects
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {pm.completedProjects}
                </Typography>
              </Box>

              {/* Dotted Pattern on right */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-completedprojects"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#81c784" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="140"
                  fill="url(#dots-completedprojects)"
                />
              </Box>
            </Box>
          </Box>
        );

      // <--------------------------------team lead--------------------------->
      case "tutor":
        const tl = dashboard as TeamLeadDashboard;
        return (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              overflowX: "auto",
              py: 2,
              px: 5,
            }}
          >
            {/* Team Performance */}

            <Box
              sx={{
                background: "linear-gradient(to right, #f3d9ff, #d0a3ff)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 300,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
            >
              {/* Top Icon Box */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    border: "2px solid #5e35b1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AutoGraphIcon sx={{ color: "#5e35b1", fontSize: 22 }} />
                </Box>
              </Box>

              {/* Bottom: Label (left) + Value (right) */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{ color: "#2e0854", fontWeight: 500, fontSize: 14 }}
                >
                  Team Performance
                </Typography>
                <Typography
                  sx={{ color: "#2e0854", fontWeight: "bold", fontSize: 22 }}
                >
                  {tl.teamPerformance}
                </Typography>
              </Box>

              {/* Decorative dotted pattern on right */}
              <Box
                component="svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -30,
                  top: -30,
                  height: "160%",
                  opacity: 0.1,
                }}
              >
                <defs>
                  <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1" cy="1" r="1.5" fill="#5e35b1" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#dots)" />
              </Box>
            </Box>

            {/* Team Members */}
            <Box
              sx={{
                background: "linear-gradient(to right, #ffe9c5, #ffd17f)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 300,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
            >
              {/* Top: Icon only */}
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    border: "2px solid #ef6c00",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <GroupsIcon sx={{ color: "#ef6c00", fontSize: 22 }} />
                </Box>
              </Box>

              {/* Bottom: Label (left), Value (right) */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{ color: "#5d4037", fontWeight: 500, fontSize: 14 }}
                >
                  Team Members
                </Typography>
                <Typography
                  sx={{ color: "#5d4037", fontWeight: "bold", fontSize: 22 }}
                >
                  {tl.teamMembers}
                </Typography>
              </Box>

              {/* Decorative dotted shape */}
              <Box
                component="svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -30,
                  top: -30,
                  height: "160%",
                  opacity: 0.1,
                }}
              >
                <defs>
                  <pattern
                    id="dots-orange"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1" cy="1" r="1.5" fill="#ef6c00" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#dots-orange)" />
              </Box>
            </Box>

            {/* Open Issues */}

            <Box
              sx={{
                background: "linear-gradient(to right, #d2f8e3, #a5f3c3)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 300,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
            >
              {/* Top: Icon box */}
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    border: "2px solid #2e7d32",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ReportGmailerrorredOutlinedIcon
                    sx={{ color: "#2e7d32", fontSize: 22 }}
                  />
                </Box>
              </Box>

              {/* Bottom: Label on left, Value on right */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{ color: "#2e7d32", fontWeight: 500, fontSize: 14 }}
                >
                  Open Issues
                </Typography>
                <Typography
                  sx={{ color: "#2e7d32", fontWeight: "bold", fontSize: 22 }}
                >
                  {tl.openIssues}
                </Typography>
              </Box>

              {/* Decorative dotted background */}
              <Box
                component="svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -30,
                  top: -30,
                  height: "160%",
                  opacity: 0.1,
                }}
              >
                <defs>
                  <pattern
                    id="dots-green"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1" cy="1" r="1.5" fill="#2e7d32" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#dots-green)" />
              </Box>
            </Box>

            {/* Upcoming Deadlines */}
            <Box
              sx={{
                background: "linear-gradient(to right, #fff7e1, #ffd966)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 300,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
            >
              {/* Icon top-left */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  border: "2px solid #fb8c00",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <QueryBuilderOutlinedIcon
                  sx={{ color: "#fb8c00", fontSize: 22 }}
                />
              </Box>

              {/* Bottom row: Name left, Dates right */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  mt: 1
                }}
              >
                {/* Label on bottom left */}
                <Typography
                  sx={{ color: "#fb8c00", fontWeight: 500, fontSize: 14 }}>
                  Upcoming Deadlines
                </Typography>

                {/* Dates on bottom right */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    maxWidth: "140px",
                    overflowX: "auto",
                    justifyContent: "flex-end",
                  }}
                >
                  {tl.upcomingDeadlines && tl.upcomingDeadlines.length > 0 ? (
                    tl.upcomingDeadlines.map((d, idx) => {
                      const dateObj = new Date(d);
                      const formattedDate = dateObj.toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      );
                      return (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: "#000",
                            backgroundColor: "#fff3cd",
                            borderRadius: "6px",
                            px: 1,
                            py: 0.3,
                            fontWeight: 500,
                            fontSize: "0.85rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {formattedDate}
                        </Typography>
                      );
                    })
                  ) : (
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      No upcoming deadlines
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Decorative dotted background */}
              <Box
                component="svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -30,
                  top: -30,
                  height: "160%",
                  opacity: 0.1,
                }}
              >
                <defs>
                  <pattern
                    id="dots-orange"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1" cy="1" r="1.5" fill="#fb8c00" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#dots-orange)" />
              </Box>
            </Box>
          </Box>
        );
      // <-------------------------Employee---------------------------->
      case "student":
        const emp = dashboard as EmployeeDashboard;
        return (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "nowrap",
              overflowX: "auto",
              py:3,
              px:3,
            }}
          >
            {/* Progress */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #e1f5fe 0%, #29b6f6 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 310,
                p: 2,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
              }}
            >
              {/* Icon in rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #29b6f6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "transparent",
                }}
              >
                <IncompleteCircleOutlinedIcon
                  sx={{ color: "#29b6f6", fontSize: 22 }}
                />
              </Box>

              {/* Label and Value */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{ color: "#29b6f6", fontWeight: 500, fontSize: 14 }}
                >
                  Progress
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {emp.progress}%
                </Typography>
              </Box>

              {/* Dotted pattern */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-progress"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#29b6f6" />
                  </pattern>
                </defs>
                <rect width="100" height="140" fill="url(#dots-progress)" />
              </Box>
            </Box>

            {/* Completed Tasks */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #dcedc8 0%, #66bb6a 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 310,
                p: 2,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
              }}
            >
              {/* Icon in rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #66bb6a",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "transparent",
                }}
              >
                <TaskAltOutlinedIcon sx={{ color: "#66bb6a", fontSize: 22 }} />
              </Box>

              {/* Label and Value */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{ color: "#66bb6a", fontWeight: 500, fontSize: 14 }}
                >
                  Completed Tasks
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 22, color: "#000" }}
                >
                  {emp.completedTasks}
                </Typography>
              </Box>

              {/* Dotted pattern */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-completedtasks"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#66bb6a" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="140"
                  fill="url(#dots-completedtasks)"
                />
              </Box>
            </Box>
            {/* Assigned Tasks */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #fff3e0 0%, #ffa726 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 310,
                p: 2,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
              }}
            >
              {/* Icon in rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #ffa726",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "transparent",
                }}
              >
                <ScheduleSendOutlinedIcon
                  sx={{ color: "#ffa726", fontSize: 22 }}
                />
              </Box>

              {/* Label and value on same line */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "nowrap",
                }}
              >
                <Typography
                  sx={{ color: "#ffa726", fontWeight: 500, fontSize: 14 }}
                >
                  Assigned Tasks
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "60%",
                  }}
                  title={emp.assignedTasks.join(", ")}
                >
                  {emp.assignedTasks.length > 0
                    ? emp.assignedTasks.join(", ")
                    : "No tasks assigned"}
                </Typography>
              </Box>

              {/* Dotted pattern */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-assignedtasks"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#ffa726" />
                  </pattern>
                </defs>
                <rect
                  width="100"
                  height="140"
                  fill="url(#dots-assignedtasks)"
                />
              </Box>
            </Box>

            {/* Badges */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #fff9c4 0%, #ffca28 100%)",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 310,
                p: 2,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
              }}
            >
              {/* Icon in rounded square */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  border: "1.5px solid #ffca28",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  backgroundColor: "transparent",
                }}
              >
                <MilitaryTechOutlinedIcon
                  sx={{ color: "#ffca28", fontSize: 22 }}
                />
              </Box>

              {/* Label and value on same line */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "nowrap",
                }}
              >
                <Typography
                  sx={{ color: "#ffca28", fontWeight: 500, fontSize: 14 }}
                >
                  Badges
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "60%",
                  }}
                  title={emp.badges.join(", ")}
                >
                  {emp.badges.length > 0
                    ? emp.badges.map((b) => `🏅 ${b}`).join(", ")
                    : "No badges earned"}
                </Typography>
              </Box>

              {/* Dotted pattern */}
              <Box
                component="svg"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  right: -20,
                  top: -20,
                  height: "160%",
                  width: 200,
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id="dots-badges"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#ffca28" />
                  </pattern>
                </defs>
                <rect width="100" height="140" fill="url(#dots-badges)" />
              </Box>
            </Box>
          </Box>
        );
      default:
        return (
          <Typography>No dashboard data available for this role</Typography>
        );
    }
  };

  return (
    <Box sx={{ p: 1.2 }}>
      {/* Top row: Left and right content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          position:'sticky'
        }}
      >
        {/* Left side: Avatar + greeting */}
       <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar alt={`${auth.user?.name || "Employee"}`}>
            {(auth.user?.name || "E").charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Hey, {auth.user?.name || "Employee"}
            </span>
            <Typography sx={{ textTransform: "capitalize", color: "gray" }}>
              {data?.role ? data.role.replace("-", " ") : "Dashboard"}
            </Typography>
          </Box>
        </Box> 

        {/* Right side: Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <DarkMode sx={{ cursor: "pointer", color: "gray" }} />
          <LightModeIcon sx={{ cursor: "pointer", color: "gray" }} />
          <NotificationsIcon sx={{ cursor: "pointer", color: "gray" }} />
        </Box>
      </Box>
      <Typography sx={{fontWeight:600,fontSize:'15px'}}>Overview</Typography>
      {/* Cards below */}
      {renderCards()}
    </Box>
  );
};

export default DashboardPage;
