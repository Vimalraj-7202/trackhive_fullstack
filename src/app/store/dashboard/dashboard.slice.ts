import { createSlice } from "@reduxjs/toolkit";
import { getDashboard } from "./dashboard.thunk";
import { DashboardData } from "@/app/Types/dashboard.type";

interface DashboardState{
    loading:boolean,
    error:string|null;
    data:DashboardData|null;
}

const initialState:DashboardState={
    loading:false,
    error:null,
    data:null
};

const dashboardSlice=createSlice({
    name:'dashboard',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getDashboard.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getDashboard.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(getDashboard.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string
        })
    }
})

export default dashboardSlice.reducer;