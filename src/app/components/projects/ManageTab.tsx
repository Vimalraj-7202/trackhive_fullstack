"use client";
import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import ManageProject from "./ManageProject";
import AssignProject from "./AssignProject";

function ManageTab() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs */}
      <Tabs value={value} onChange={handleChange}>
        <Tab sx={{ textTransform: "none", fontSize: 18}} label="Projects" />
        <Tab
          sx={{ textTransform: "none",fontSize: 18}}
          label="Assign Projects"
        />
      </Tabs>

      {/* Tab Panels */}
      {value === 0 && (
        <Box sx={{ p: 2 }}>
          <ManageProject />
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 2 }}>
          <AssignProject />
        </Box>
      )}
    </Box>
  );
}

export default ManageTab;
