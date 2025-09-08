"use client";
import React, { useEffect, useState } from "react";
import { Box, Tooltip, CircularProgress } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import {
  SpaceDashboardOutlined,
  WorkOutlineOutlined,
  AssignmentOutlined,
  SettingsOutlined,
  GroupsOutlined,
  LogoutOutlined,
  NotificationsActiveOutlined,
  AdfScannerOutlined,
  EqualizerOutlined,
} from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "@/app/hooks/redux";
import { setUser } from "@/app/store/auth/auth.slice";

const iconSize = 28;

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);

  // Hydrate Redux user from localStorage if missing
  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        dispatch(setUser(JSON.parse(savedUser)));
      }
    }
    setLoading(false);
  }, [user, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  const normalizedRole = (user?.role || "").replace(/-/g, " ").toLowerCase();

  const menuItems = [
    { label: "Dashboard", icon: <SpaceDashboardOutlined />, path: "/dashboard", roles: ["team lead", "employee", "project manager"] },
    { label: "Projects", icon: <WorkOutlineOutlined />, path: "/projects", roles: ["employee", "project manager"] },
    { label: "Tasks", icon: <AssignmentOutlined />, path: "/tasks", roles: ["team lead", "project manager"] },
    { label: "Settings", icon: <SettingsOutlined />, path: "/settings", roles: ["team lead", "employee", "project manager"] },
    { label: "Teams", icon: <GroupsOutlined />, path: "/teams", roles: ["project manager"] },
    { label: "Notifications", icon: <NotificationsActiveOutlined />, path: "/notifications", roles: ["team lead", "employee", "project manager"] },
    { label: "Reports", icon: <AdfScannerOutlined />, path: "/reports", roles: ["team lead", "employee", "project manager"] },
    { label: "Analytics", icon: <EqualizerOutlined />, path: "/analytics", roles: ["team lead", "employee", "project manager"] },
  ];

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    );
  }

  if (!normalizedRole) {
    return null;
  }

  return (
    <Box
      sx={{
        width: 80, // fixed width for alignment
        bgcolor: "linear-gradient(to bottom, #3f0071, #00695c)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        height: "100vh",
      }}
    >
      {/* Menu icons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", mt: 2 }}>
        {menuItems
          .filter((item) => item.roles.includes(normalizedRole))
          .map((item, index) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Tooltip title={item.label} placement="right" key={index}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    cursor: "pointer",
                    color: isActive ? "#4fc3f7" : "white",
                    "&:hover": { color: "#4fc3f7", bgcolor: "rgba(255,255,255,0.1)" },
                    transition: "0.2s",
                  }}
                  onClick={() => router.push(item.path)}
                >
                  {React.cloneElement(item.icon, { sx: { fontSize: iconSize } })}
                </Box>
              </Tooltip>
            );
          })}
      </Box>

      {/* Logout button pinned at bottom */}
      <Tooltip title="Logout" placement="right">
        <Box
          sx={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            cursor: "pointer",
            color: "white",
            mb:2,
            "&:hover": { color: "red", bgcolor: "rgba(255,0,0,0.1)" },
          }}
          onClick={handleLogout}
        >
          <LogoutOutlined sx={{ fontSize: iconSize }} />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;
