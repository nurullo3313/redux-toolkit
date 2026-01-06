import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../redux/slices/postsSlice'

const PostItem = ({item}) => {
    const dispatch = useDispatch()
    const {posts ,loading ,error } = useSelector((state)=>state.post)
  

    return (
        <div className='w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 py-3 px-4 text-white rounded-lg cursor-pointer shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-100 border border-blue-400/50'>
            <div className='font-semibold text-sm'
                onClick={()=>dispatch(deletePost(item.id))}
            >
                
                    {item.id}  {item.title}
                
            </div>
        </div>
    )
}

export default PostItem