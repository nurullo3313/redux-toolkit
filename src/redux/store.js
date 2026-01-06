import { configureStore  } from "@reduxjs/toolkit";

import   userSlice  from "./slices/userSlice";
import  todoSlice  from "./slices/todoSlice";
import  postsSlice  from "./slices/postsSlice";


const store = configureStore({
    reducer:{
       user : userSlice,
       todo : todoSlice,
       post: postsSlice,
    }
})



export default store