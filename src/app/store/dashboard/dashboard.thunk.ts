import { createAsyncThunk } from "@reduxjs/toolkit";
import { dashboard_Service } from "@/app/lib/dashboard-managemet";

//get dashboard

export const getDashboard=createAsyncThunk(
    '/dashboard',
    async(_,{rejectWithValue})=>{
        try{
            const response=await dashboard_Service.getDashboard();
            if(!response) throw new Error('no data found');
            return response;
        }catch(error:any){
            return rejectWithValue(error.message)
        }
    }

)