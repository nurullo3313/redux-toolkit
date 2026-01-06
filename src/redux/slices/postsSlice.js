import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    posts:[],
    loading: false,
    error : null
}

export const  getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_,{rejectWithValue})=>{
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return res.data
        }catch(error){
            return rejectWithValue(error.message);
        }
        
    }
)

export const deletePostById = createAsyncThunk(
    "posts/deletePostById",
    async (id,{rejectWithValue})=>{
        try{
           await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
           return id
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)



export const postsSlice = createSlice({
    name : "posts",
    initialState,
    reducers:{
        setPosts : (state, action)=>{
            state.posts = action.payload
        },
        deletePost:(state, action)=>{
            state.posts = state.posts.filter((post)=> post.id !== action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getPosts.fulfilled,(state, action)=>{
            console.log("loaded!"),
             state.posts = action.payload,
             state.loading = false
             state.error = null

        })
        .addCase(getPosts.pending,(state)=>{
            console.log("loading...")
            state.loading = true
        })
        .addCase(getPosts.rejected,(state, action)=>{
            console.log("error")
            state.error =action.payload
            state.loading = false
        })
        


    }
})

export const {setPosts,deletePost} = postsSlice.actions

export default postsSlice.reducer