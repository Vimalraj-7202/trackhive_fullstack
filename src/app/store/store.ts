import {configureStore} from '@reduxjs/toolkit';
import {useSelector,TypedUseSelectorHook, useDispatch } from 'react-redux';
import authReducer from '@/app/store/auth/auth.slice';
import dashboardReducer from '@/app/store/dashboard/dashboard.slice';
import projectReducer from '@/app/store/project/project.slice'


const store=configureStore({
    reducer:{
        auth:authReducer,
        dashboard:dashboardReducer,
        project:projectReducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export const useAppDispatch=()=>useDispatch<AppDispatch>;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;

export default store;