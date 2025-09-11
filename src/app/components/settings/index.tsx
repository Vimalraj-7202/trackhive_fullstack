"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Avatar,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const LOCAL_STORAGE_KEYS = {
  profilePic: "profilePic",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  phone: "phone",
};

const ProfileDetails = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("Vimalraj");
  const [lastName, setLastName] = useState("S");
  const [email, setEmail] = useState("vimalraj.s@hepl.com");
  const [phone, setPhone] = useState("7639326251");

  // Load from localStorage on mount
  useEffect(() => {
    const storedProfilePic = localStorage.getItem(LOCAL_STORAGE_KEYS.profilePic);
    const storedFirstName = localStorage.getItem(LOCAL_STORAGE_KEYS.firstName);
    const storedLastName = localStorage.getItem(LOCAL_STORAGE_KEYS.lastName);
    const storedEmail = localStorage.getItem(LOCAL_STORAGE_KEYS.email);
    const storedPhone = localStorage.getItem(LOCAL_STORAGE_KEYS.phone);

    if (storedProfilePic) setProfilePic(storedProfilePic);
    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhone) setPhone(storedPhone);
  }, []);

  // Save changes to localStorage
  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEYS.profilePic, profilePic ?? ""); }, [profilePic]);
  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEYS.firstName, firstName); }, [firstName]);
  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEYS.lastName, lastName); }, [lastName]);
  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEYS.email, email); }, [email]);
  useEffect(() => { localStorage.setItem(LOCAL_STORAGE_KEYS.phone, phone); }, [phone]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const smallTextFieldSx = {
    "& .MuiInputBase-input": { fontSize: "0.875rem", padding: "6.5px 14px" },
    "& .MuiInputLabel-root": { fontSize: "0.875rem", marginBottom: "4px" },
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      minHeight: 36,
      padding: 0,
      "& fieldset": { borderColor: "#ccc" },
      "&:hover fieldset": { borderColor: "#ccc" },
      "&.Mui-focused fieldset": { borderColor: "#ccc" },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg,#f3e5f5,#e1f5fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Profile Picture */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label htmlFor="profile-upload" style={{ cursor: "pointer" }}>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
            <Avatar
              src={profilePic || "/default-profile.png"}
              sx={{ width: 120, height: 120 }}
            />
          </label>
          <Typography variant="h6" sx={{ mt: 1, fontSize: "16px", color: "gray" }}>
            Personal Info
          </Typography>
        </Box>

        {/* Designation */}
        <TextField
          label="Designation"
          value="Trainee - Developer"
          fullWidth
          InputProps={{ readOnly: true }}
          variant="outlined"
          sx={smallTextFieldSx}
        />

        {/* Name Fields */}
        <Box sx={{ display: "flex", gap: 2, width: "100%",height:'50px' }}>
          <TextField
            label="First Name"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
            sx={smallTextFieldSx}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
            sx={smallTextFieldSx}
          />
        </Box>

        {/* Email and Phone Fields */}
        <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={smallTextFieldSx}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleCopy(email)}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Personal Number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            sx={smallTextFieldSx}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
