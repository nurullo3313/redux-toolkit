import React from 'react'
import PostItem from './PostItem'

const Posts = () => {
    return (
        <div>
            <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 mb-4'
            >
                Get Posts
            </button>
            <div className='space-y-2'>
                <PostItem />
            </div>
        </div>
    )
}

export default Posts