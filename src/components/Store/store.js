import { configureStore } from "@reduxjs/toolkit";
import { loginSliceReducer } from "./login";



const store = configureStore({
    reducer:{
        loginReducer:loginSliceReducer
    }
})


export default store;