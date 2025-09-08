import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "@/app/lib/user-management";

//Login User
export const loginUser=createAsyncThunk(
    'auth/login',
    async(payload:{email:string;password:string},{rejectWithValue})=>{
        try{
            const {data}=await loginService.loginUser(payload);
            if(data?.token){
                localStorage.setItem('token',data.token);
            }
            if(data?.user){
                localStorage.setItem('user',JSON.stringify(data.user))
            }
            return data;
        }catch(error:any){
            return rejectWithValue(error?.response?.data?.message||'Login failed')
        }
    }
)

//Register User
export const registerUser=createAsyncThunk(
    'auth/register',
    async(payload:{name:string;email:string;password:string,role:string},{rejectWithValue})=>{
        try{
            const {data}=await loginService.createUser(payload);
            return data
        }catch(error:any){
            return rejectWithValue(error?.response?.data?.message||'Registration failed')
        }
    }
)