import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    nameTodo : ""
}

export const todoSlice = createSlice({
   name : "todo",
   initialState,
   reducers:{
        addTodo:(state, action)=>{
            state.todos.push(action.payload)
            state.nameTodo = ""
        },
        setNameTodo : (state, action)=>{
            state.nameTodo = action.payload
        },
        toggleComplatedTodo : (state, action)=>{
            const toggleTodo = state.todos.find((todo)=>todo.id === action.payload)
            toggleTodo.complated = !toggleTodo.complated

        },
        deletdTodo: (state , action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
   } 
})

export const {addTodo,setNameTodo,toggleComplatedTodo,deletdTodo} = todoSlice.actions

export default todoSlice.reducer