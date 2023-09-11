import { createSlice } from "@reduxjs/toolkit";


const initialState={isLoggedIn:false,showLoginModal:false,showSignUpModal:false};

const loginSlice = createSlice({
    name:"loginandSignUp",
    initialState:initialState,
    reducers:{
        showLogin(state){
            state.showSignUpModal=false;
           state.showLoginModal = true; 
           localStorage.setItem("login",true);
        },

        removeLoginModal(state){
            state.showLoginModal=false;
        },

        showSignUp(state){
            state.showLoginModal=false;
            state.showSignUpModal=true;
        },
        removeSignUp(state){
            state.showSignUpModal=false;
        },

         login(state){
            state.isLoggedIn=true;
            state.showLoginModal=false;
            state.showSignUpModal=false;
        },
        logout(state){
            state.isLoggedIn=false;
        }
    }
})

export  const loginSliceReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;