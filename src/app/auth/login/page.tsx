"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Link,
  Radio,
} from "@mui/material";
import HiveIcon from "@mui/icons-material/HiveOutlined";
import { useRouter } from "next/navigation";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAppDispatch } from "@/app/hooks/redux";
import { loginUser, registerUser } from "@/app/store/auth/auth.thunk";

const AuthPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (isLogin) {
      try {
        const res = await dispatch(loginUser({ email, password })).unwrap();
        console.log("Login success:", res);
        router.push("/dashboard");
      } catch (err) {
        console.error("Login failed:", err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const res = await dispatch(
          registerUser({ name, email, password, role })
        ).unwrap();
        console.log("Register success:", res);
        router.push("/dashboard");
      } catch (err) {
        console.error("Register failed:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Common sx for textfields
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "11px",
      height: "45px",
      backgroundColor: "#fffdf5",
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#fbc02d",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fbc02d",
      },
    },
  };

  // Common sx for checkboxes and radios
  const checkStyle = {
    color: "#fbc02d",
    "&.Mui-checked": {
      color: "#fbc02d",
    },
  };

  return (
    <Box sx={{ display: "flex", height: "97.5vh" }}>
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#fff8e1",
          p: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            top: 24,
            left: 32,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <HiveIcon sx={{ color: "#fbc02d" }} />
          <Typography variant="h6" fontWeight="bold">
            <span style={{ color: "#fbc02d" }}>Track</span>Hive
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 450 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Lead productive teams with clarity
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            TrackHive centralizes tasks, sprints, and performance insights so
            your team can move fast and stay aligned.
          </Typography>
          <ul
            style={{
              fontSize: "1rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <TaskIcon sx={{ color: "#fbc02d" }} />
              Plan sprints with real-time capacity
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <TaskIcon sx={{ color: "#fbc02d" }} />
              Automated status updates and reminders
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <TaskIcon sx={{ color: "#fbc02d" }} />
              Role-based access and secure SSO
            </li>
          </ul>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 6
        }}
      >
        <Box component="form" onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit();
        }} sx={{ width: "100%", maxWidth: 450 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {isLogin ? "Welcome back" : "Create your account"}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mb={3}
            sx={{ textAlign: "center" }}
          >
            {isLogin
              ? "Sign in to your TrackHive workspace"
              : "Sign up to get started with TrackHive"}
          </Typography>

          {!isLogin && (
            <TextField
              fullWidth
              placeholder="Full Name"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={textFieldStyle}
            />
          )}

          {/* Email */}
          <TextField
            fullWidth
            placeholder="you@company.com"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />

          {/* Password */}
          <TextField
            fullWidth
            placeholder="Password"
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />

          {/* Remember me + Forgot */}
          {isLogin && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    sx={checkStyle}
                  />
                }
                label="Remember me"
              />
              <Link
                href="#"
                underline="hover"
                sx={{ fontSize: "0.9rem", color: "#f57c00" }}
              >
                Forgot?
              </Link>
            </Box>
          )}

          {/* Role for signup */}
          {!isLogin && (
            <Box mt={2}>
              <Typography
                variant="body2"
                fontWeight="medium"
                gutterBottom
              >
                Select Role
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <FormControlLabel
                  value="project-manager"
                  control={
                    <Radio
                      checked={role === "project-manager"}
                      onChange={(e) => setRole(e.target.value)}
                      sx={checkStyle}
                    />
                  }
                  label="Project Manager"
                />
                <FormControlLabel
                  value="team-lead"
                  control={
                    <Radio
                      checked={role === "team-lead"}
                      onChange={(e) => setRole(e.target.value)}
                      sx={checkStyle}
                    />
                  }
                  label="Team Lead"
                />
                <FormControlLabel
                  value="employee"
                  control={
                    <Radio
                      checked={role === "employee"}
                      onChange={(e) => setRole(e.target.value)}
                      sx={checkStyle}
                    />
                  }
                  label="Employee"
                />
              </Box>
            </Box>
          )}

          {/* Submit */}
          <Button
          type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              color: "black",
              textTransform: "none",
              borderRadius: "12px",
              bgcolor: "#fbc02d",
              "&:hover": { bgcolor: "#f9a825" },
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Please wait..." : isLogin ? "Sign in" : "Sign up"}
          </Button>

          {/* Toggle */}
          <Typography variant="body2" textAlign="center" mt={3}>
            {isLogin ? "New to TrackHive?" : "Already have an account?"}{" "}
            <Button
              variant="text"
              onClick={() => setIsLogin(!isLogin)}
              sx={{ textTransform: "none", color: "#f57c00" }}
            >
              {isLogin ? "Create an account" : "Sign in"}
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
