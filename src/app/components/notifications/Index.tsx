"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Box, Grid, Paper, Stack, Avatar, Chip, Typography, Switch, FormControlLabel, Checkbox } from "@mui/material";

// Sample notifications for demonstration
const managerNotifications = [
  { id: 1, title: "Project Status", message: "Project Alpha is delayed.", type: "warning" },
  { id: 2, title: "Team Update", message: "Ravi completed the Login Page task.", type: "success" },
];

const tlNotifications = [
  { id: 1, title: "New Task Assigned", message: "You have a new task: Dashboard UI", type: "info" },
  { id: 2, title: "Deadline Approaching", message: "Payment API task is due tomorrow", type: "warning" },
];

const employeeNotifications = [
  { id: 1, title: "Task Assigned", message: "You have a new task: Login Page", type: "info" },
  { id: 2, title: "Task Completed", message: "Task Dashboard UI marked complete by TL", type: "success" },
];

const NotificationsScreen = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);

  const [enabled, setEnabled] = useState(true);
  const [inApp, setInApp] = useState(true);
  const [email, setEmail] = useState(false);

  // Choose notifications based on role
  const notifications =
    role === "project-manager"
      ? managerNotifications
      : role === "team-lead"
      ? tlNotifications
      : employeeNotifications;

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f3e5f5,#e1f5fe)",
        position: "relative",
      }}
    >
      {/* Dot pattern */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: 150,
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Header with toggle */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          🔔 Notifications
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>Enable</Typography>
          <Switch checked={enabled} onChange={() => setEnabled(!enabled)} color="primary" />
        </Stack>
      </Stack>

      {/* Preferences */}
      {enabled && (
        <Paper
          elevation={4}
          sx={{ p: 3, mb: 4, borderRadius: 3, background: "linear-gradient(135deg,#ffffff,#f7f7f7)" }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Notification Preferences
          </Typography>
          <Stack direction="row" spacing={4}>
            <FormControlLabel
              control={<Checkbox checked={inApp} onChange={() => setInApp(!inApp)} color="primary" />}
              label="In-App"
            />
            <FormControlLabel
              control={<Checkbox checked={email} onChange={() => setEmail(!email)} color="primary" />}
              label="Email"
            />
          </Stack>
        </Paper>
      )}

      {/* Notification list */}
      {enabled ? (
        notifications.length ? (
          <Grid container spacing={3}>
            {notifications.map((notif) => (
              <Grid size={{xs:12,md:6,lg:4}} key={notif.id}>
                <Paper
                  elevation={8}
                  sx={{ p: 3, borderRadius: 4, background: "linear-gradient(135deg,#ffffff,#fafafa)" }}
                >
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                    <Avatar
                      sx={{
                        bgcolor:
                          notif.type === "info"
                            ? "#42a5f5"
                            : notif.type === "success"
                            ? "#4caf50"
                            : "#ff9800",
                      }}
                    >
                      {notif.title[0]}
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold">{notif.title}</Typography>
                      <Typography variant="caption">{notif.message}</Typography>
                    </Box>
                  </Stack>
                  <Chip
                    label={notif.type.toUpperCase()}
                    size="small"
                    color={
                      notif.type === "success"
                        ? "success"
                        : notif.type === "warning"
                        ? "warning"
                        : "info"
                    }
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <Typography variant="h6" color="text.secondary">
              No notifications available
            </Typography>
          </Box>
        )
      ) : (
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Typography variant="h6" color="text.secondary">
            Notifications are turned off
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default NotificationsScreen;
