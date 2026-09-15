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
<Box sx={{ width: "100%", height: "calc(100vh -20px)", display: "flex", flexDirection: "column" }}>
  {/* Tabs */}
  <Tabs
    value={value}
    onChange={handleChange}
    textColor="inherit"
    TabIndicatorProps={{ style: { backgroundColor: "teal", height: 3 } }}
  >
    <Tab
      sx={{
        textTransform: "none",
        fontSize: 18,
        color: value === 0 ? "teal" : "black",
      }}
      label="Projects"
    />
    <Tab
      sx={{
        textTransform: "none",
        fontSize: 18,
        color: value === 1 ? "teal" : "black",
      }}
      label="Assign Projects"
    />
  </Tabs>

  {/* Tab Panels */}
  <Box sx={{ flex: 1, overflowY: "auto" }}>
    {value === 0 && <ManageProject />}
    {value === 1 && <AssignProject />}
  </Box>
</Box>

  );
}

export default ManageTab;
