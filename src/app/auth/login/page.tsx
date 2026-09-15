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
  CircularProgress,
  Snackbar,
  Alert,
  Fade,
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

  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showMessage = (message: string, severity: "success" | "error") => {
    setSnack({ open: true, message, severity });
  };

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && !name)) {
      showMessage("Please fill in all fields.", "error");
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        const res = await dispatch(loginUser({ email, password })).unwrap();
        showMessage("Login successful", "success");
        router.push("/dashboard");
      } else {
        const res = await dispatch(
          registerUser({ name, email, password, role })
        ).unwrap();
        showMessage("Registration successful", "success");
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.error("Auth failed:", err);
      showMessage(
        isLogin ? "Login failed. Try again." : "Registration failed.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = email && password && (isLogin || name);

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "11px",
      height: "45px",
      backgroundColor: "#fffdf5",
      transition: "all 0.2s ease-in-out",
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

  const checkStyle = {
    color: "#fbc02d",
    "&.Mui-checked": {
      color: "#fbc02d",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "97vh",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          background: `linear-gradient(135deg, #fff8e1 0%, #fbe9e7 100%), url('/teamwork.svg')`,
          backgroundBlendMode: "lighten",
          opacity: 0.95,

          p: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 24,
            left: 32,
            display: "flex",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <HiveIcon sx={{ color: "#fbc02d", fontSize: "40px" }} />
          <Typography variant="h6" fontWeight="bold">
            <span style={{ color: "#fbc02d" }}>Track</span>Hive
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 450 }}>
          <Typography variant="h3" fontWeight="bolder" gutterBottom>
            Lead productive teams with clarity
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            TrackHive centralizes tasks, sprints, and performance insights so
            your team can move fast and stay aligned.
          </Typography>
          <ul
            style={{
              fontSize: "1.2rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <TaskIcon sx={{ color: "#fbc02d" }} />
              Plan sprints with real-time capacity
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
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
          p: 6,
          backgroundColor: "#fefefe",
        }}
      >
        <Fade in timeout={500}>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            sx={{
              width: "100%",
              maxWidth: 450,
              p: 4,
              borderRadius: "16px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
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

            {!isLogin && (
              <Box mt={2}>
                <Typography variant="body2" fontWeight="medium" gutterBottom>
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

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.2,
                color: "black",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: "12px",
                bgcolor: "#fbc02d",
                "&:hover": { bgcolor: "#f9a825" },
              }}
              disabled={loading || !isFormValid}
            >
              {loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : isLogin ? (
                "Sign in"
              ) : (
                "Sign up"
              )}
            </Button>

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
        </Fade>
      </Box>

      {/* Snackbar Feedback */}
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnack({ ...snack, open: false })}
          severity={snack.severity as any}
          sx={{ width: "100%", borderRadius: "8px" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AuthPage;
