import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import  {getPosts}  from '../redux/slices/postsSlice'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state)=>state.post.posts)
    console.log(posts)
    return (
        <div>
            <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 mb-4'
                onClick={()=>dispatch(getPosts())}
            >
                Get Posts
            </button>
            <div className='space-y-2'>
                {
                    posts.map((item)=>(
                        <PostItem item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts