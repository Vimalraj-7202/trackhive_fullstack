"use client";
import React, { useEffect } from "react";
import { Box, Typography, Avatar, Paper, Badge, Button } from "@mui/material";
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
import FullscreenIcon from "@mui/icons-material/FullscreenRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsIcon from "@mui/icons-material/Notifications";

//type import
import {
  DashboardData,
  ManagerDashboard,
  TeamLeadDashboard,
  EmployeeDashboard,
} from "@/app/Types/dashboard.type";
import { DarkMode } from "@mui/icons-material";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );
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
      case "project-manager":
        const pm = dashboard as ManagerDashboard;
        return (
          // <--------------------project manager-------------------------------->
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "nowrap",
              overflowX: "auto",
              py: 2,
            }}
          >
            {/* Active Projects */}
            <Box
              sx={{
                color: "#fff",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                backgroundColor: "#f8fafb",
                p: 2,
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Active Projects
                </Typography>
                <FullscreenIcon
                  sx={{ color: "black", cursor: "pointer", fontSize: 30 }}
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", mt: 2, gap: 2 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "0.5px solid #d0cfd0",
                  }}
                >
                  <WorkOutlineOutlinedIcon
                    sx={{ color: "black", fontSize: 25 }}
                  />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {pm.activeProjects}
                </Typography>
              </Box>
            </Box>

            {/* Active Sprints */}
            <Box
              sx={{
                color: "#fff",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                backgroundColor: "#f8fafb",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Active Sprints
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <WorkspacesOutlinedIcon
                    sx={{ color: "black", fontSize: 28 }}
                  />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {pm.activeSprints}
                </Typography>
              </Box>
            </Box>

            {/* Avg Velocity */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Avg Velocity
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <TimelineOutlinedIcon sx={{ color: "black", fontSize: 30 }} />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {pm.avgVelocity}
                </Typography>
              </Box>
            </Box>

            {/* At Risk Projects */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  At Risk Projects
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#ef5350",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <DangerousOutlinedIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {pm.atRiskProjects}
                </Typography>
              </Box>
            </Box>

            {/* Completed Projects */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Completed Projects
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#66bb6a",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <TaskAltOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {pm.completedProjects}
                </Typography>
              </Box>
            </Box>
          </Box>
        );

      // <--------------------------------team lead--------------------------->
      case "team-lead":
        const tl = dashboard as TeamLeadDashboard;
        return (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              overflowX: "auto",
              py: 2,
              px: 13,
            }}
          >
            {/* Team Performance */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Team Performance
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#ab47bc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <AutoGraphIcon sx={{ color: "white", fontSize: 30 }} />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {tl.teamPerformance}%
                </Typography>
              </Box>
            </Box>

            {/* Team Members */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Team Members
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#fb8c00",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <GroupsIcon sx={{ color: "white", fontSize: 30 }} />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {tl.teamMembers}
                </Typography>
              </Box>
            </Box>

            {/* Open Issues */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Open Issues
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#ef5350",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  <ReportGmailerrorredOutlinedIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                </Box>
                <Typography sx={{ color: "black" }} variant="h4">
                  {tl.openIssues}
                </Typography>
              </Box>
            </Box>

            {/* Upcoming Deadlines */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray", fontWeight: 500 }}>
                  Upcoming Deadlines
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", mt: 1, gap: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#ff9800",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <QueryBuilderOutlinedIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    maxHeight: "90px",
                    pr: 1,
                  }}
                >
                  {tl.upcomingDeadlines.length > 0 ? (
                    tl.upcomingDeadlines.map((d, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: "black" }}
                      >
                        {d}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      No upcoming deadlines
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      // <-------------------------Employee---------------------------->
      case "employee":
        const emp = dashboard as EmployeeDashboard;
        return (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "nowrap",
              overflowX: "auto",
              py: 2,
              px: 13,
            }}
          >
            {/* Progress */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 500, color: "gray" }}>
                  Progress
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box
                sx={{ display: "flex", mt: 1, gap: 2, alignItems: "center" }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#29B6F6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IncompleteCircleOutlinedIcon
                    sx={{ color: "#fff", fontSize: 30 }}
                  />
                </Box>
                <Typography variant="h4" sx={{ color: "black" }}>
                  {emp.progress}%
                </Typography>
              </Box>
            </Box>

            {/* Completed Tasks */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 500, color: "gray" }}>
                  Completed Tasks
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box
                sx={{ display: "flex", mt: 1, gap: 2, alignItems: "center" }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#66BB6A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TaskAltOutlinedIcon sx={{ color: "#fff", fontSize: 30 }} />
                </Box>
                <Typography variant="h4" sx={{ color: "black" }}>
                  {emp.completedTasks}
                </Typography>
              </Box>
            </Box>

            {/* Assigned Tasks */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 500, color: "gray" }}>
                  Assigned Tasks
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box
                sx={{ display: "flex", mt: 1, gap: 2, flex: 1, minHeight: 0 }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#FFA726",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1,
                    flexShrink: 0,
                  }}
                >
                  <ScheduleSendOutlinedIcon
                    sx={{ color: "#fff", fontSize: 30 }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    maxHeight: "100%",
                  }}
                >
                  {emp.assignedTasks.length > 0 ? (
                    emp.assignedTasks.map((t, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: "black" }}
                      >
                        • {t}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      No tasks assigned
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Badges */}
            <Box
              sx={{
                backgroundColor: "#f8fafb",
                color: "#000",
                borderRadius: "13px",
                height: "100px",
                width: 260,
                p: 2,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: 500, color: "gray" }}>
                  Badges
                </Typography>
                <FullscreenIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
              <Box
                sx={{ display: "flex", mt: 1, gap: 2, flex: 1, minHeight: 0 }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#FFCA28",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1,
                    flexShrink: 0,
                  }}
                >
                  <MilitaryTechOutlinedIcon
                    sx={{ color: "#fff", fontSize: 30 }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    maxHeight: "100%",
                  }}
                >
                  {emp.badges.length > 0 ? (
                    emp.badges.map((b, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: "black" }}
                      >
                        🏅 {b}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      No badges earned
                    </Typography>
                  )}
                </Box>
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
          justifyContent: "space-between", // Push left and right apart
          alignItems: "center",
          mb: 2, // margin bottom for spacing from cards below
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


<Paper sx={{ p: 2, borderRadius: '8px',backgroundColor:'#f8fafb' }}>
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
    
    {/* Left Side: Icon + Text */}
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {/* Notification Icon with Badge */}
      <Badge badgeContent={1} color="error" overlap="circular">
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <NotificationsIcon sx={{ color: 'white' }} />
        </Box>
      </Badge>

      {/* Text Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{fontWeight:500,fontSize:'16px'}}>
          Dear Manager
        </Typography>
        <Typography sx={{ color: 'gray',fontSize:'13px' }}>
          We have observed a decline in <span style={{ color: 'red' }}>Henry's</span> performance over the past 2 weeks.
        </Typography>
      </Box>
    </Box>

    {/* Right Side: Button */}
    <Button
      sx={{
        color: 'white',
        backgroundColor: '#601b9f',
        textTransform: 'none',
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        px: 2,
        py: 0.5
      }}
    >
      View Detail
    </Button>
  </Box>
</Paper>
      {/* Cards below */}
      {renderCards()}
    </Box>
  );
};

export default DashboardPage;
