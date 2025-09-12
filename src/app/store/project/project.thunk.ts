import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { projectService } from "@/app/lib/project-management";
import { Project } from "@/app/Types/project.type"; 
import { create } from "domain";

// get all project
export const getAllProject = createAsyncThunk<Project[], void, { rejectValue: string }>(
  "project/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await projectService.getAllProject();
      if (!response) throw new Error("No data found");
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

//create project
export const createProject=createAsyncThunk(
  'project/create',
  async(data:any,{rejectWithValue})=>{
    try{
      const response=await projectService.createProject(data);
      return response.data;
    }catch(error:any){
      return rejectWithValue(error.response?.data||error.message)
    }
  }
)

//update project
export const updateProject=createAsyncThunk(
  'project/update',
  async({id,data}:{id:string,data:any},{rejectWithValue})=>{
    try{
      const response=await projectService.updateProject(id,data);
      return response.data;
    }catch(error:any){
      return rejectWithValue(error.response?.data||error.message)
    }
  }
)

//delete project
export const deleteProject=createAsyncThunk(

  'project/delete',
  async(id:string,{rejectWithValue})=>{
    try{
      await projectService.deleteProject(id);
      return id;
    }catch(error:any){
      return rejectWithValue(error.response?.data||error.message)
    }
  }
)
