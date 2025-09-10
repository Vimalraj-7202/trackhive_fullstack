"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ManageTab from "./ManageTab";
import LeadTab from "./LeadTab";
import ViewTab from './ViewTab'

const index = () => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  return (
    <>
      {role === "project-manager" && <ManageTab />}
      {role === "team-lead" && <LeadTab />}
      {role === "employee" && <ViewTab />}
    </>
  );
};

export default index;
