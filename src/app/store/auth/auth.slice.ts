import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./auth.thunk";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
}

interface AuthState {
  user: User | null;
  users: User[];
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const getLocalItem = (key: string) =>
  typeof window !== "undefined" ? localStorage.getItem(key) : null;

const initialState: AuthState = {
  user: getLocalItem("user") ? JSON.parse(getLocalItem("user") as string) : null,
  users: [],
  token: getLocalItem("token"),
  loading: false,
  error: null,
  isAuthenticated: !!getLocalItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser:(state,action:PayloadAction<User|null>)=>{
      state.user=action.payload;
      if(action.payload){
        localStorage.setItem("user",JSON.stringify(action.payload))
      }else{
        localStorage.removeItem("user")
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // LOGIN USER
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // REGISTER USER
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setUser,logout } = authSlice.actions;
export default authSlice.reducer;
