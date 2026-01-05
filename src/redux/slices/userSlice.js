import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    firstname  :"",
    lastname : ""
}

export  const userSlice = createSlice({
    name : "user",
    initialState,
    
    reducers:{
        setFirstName : (state, action)=>{
            state.firstname = action.payload
        },
        setLastName : (state, action)=>{
            state.lastname = action.payload
        }
    }
})



export const  {setFirstName ,setLastName} = userSlice.actions

export default userSlice.reducer