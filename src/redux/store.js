import { configureStore  } from "@reduxjs/toolkit";

import   userSlice  from "./slices/userSlice";
import  todoSlice  from "./slices/todoSlice";


const store = configureStore({
    reducer:{
       user : userSlice,
       todo : todoSlice,
    }
})



export default store