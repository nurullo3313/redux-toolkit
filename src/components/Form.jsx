import React from 'react'

const Form = () => {
    return (
        <form className='w-full flex gap-2 mb-4' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                className='flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all placeholder:text-gray-400 text-gray-700 shadow-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95'
            >
                Submit
            </button>
        </form>
    )
}

export default Form