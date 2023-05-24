import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";





const store = configureStore({
   reducer:{
      user:userReducer,
   }
})
export default store