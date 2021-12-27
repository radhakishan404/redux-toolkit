import { createSlice } from "@reduxjs/toolkit";

// required:  define initial state for user module
export const userInitialState = {
    userinfo: {
        isLoading: false,
        isLoadingFailed: false,
        isInitialCalled: false,
        data: {}
    },
    isAuthenticated: false,
}

// required:  create slice for user module with required reducers (actions)
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginRequested: (state) => {
        state.userinfo = {
            ...state.userinfo,
            isLoading: true,
            isInitialCalled: true,
        }
    },
    loginCompleted: (state, action) => {
        state.userinfo = {
            ...state.userinfo,
            isLoading: false,
            isLoadingFailed: false,
            data: action.payload
        };
        state.isAuthenticated = true;
    },
    loginFailed: (state) => {
        state.userinfo = {
            ...state.userinfo,
            isLoading: false,
            isLoadingFailed: true,
            data: {},
        };
        state.isAuthenticated = false;
    },
    logoutCompleted: (state) => {
        state.userinfo = userInitialState.userinfo;
        state.isAuthenticated = userInitialState.isAuthenticated;
    }
  },
});

// required: export all defined reducer functions as actions
export const {
    loginRequested,
    loginCompleted,
    loginFailed,
    logoutCompleted
} = userSlice.actions;

// optional: define required selector functions
export const isAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserInfo = (state) => state.user.userinfo;

// required: export complete reducer
export default userSlice.reducer;