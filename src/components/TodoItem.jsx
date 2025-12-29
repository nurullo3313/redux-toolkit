import React from 'react'

const TodoItem = () => {
    const completed = false
    return (
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-4 mb-3 border border-gray-100'>
            <div className='flex justify-between items-center gap-3'>
                <button className='text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95'>
                    Complete
                </button>
                <div className={`flex-1 text-sm font-medium px-3 py-2 rounded-lg ${completed ? 'line-through text-gray-400 bg-gray-50' : 'text-gray-700 bg-gray-50'}`}>
                    Todo Text
                </div>
                <button className='text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem