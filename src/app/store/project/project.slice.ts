import { createSlice } from "@reduxjs/toolkit"; 
import { getAllProject,createProject} from "./project.thunk";
import { Project} from "@/app/Types/project.type";


interface ProjectState{
    loading:boolean,
    error:string|null,
    data:Project[]|null;
}

const initialState:ProjectState={
    loading:false,
    error:null,
    data:null
}

const projectSlice=createSlice({
    name:'project',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //getAllProject
        .addCase(getAllProject.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(getAllProject.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(getAllProject.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string
        })

        //create project
        .addCase(createProject.pending,(state)=>{
            state.loading=true;
        })
        .addCase(createProject.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(createProject.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
    }
})

export default projectSlice.reducer;