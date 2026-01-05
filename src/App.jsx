import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'

function App() {
    const todo = useSelector((state) => state.todo.todos);
    return (
        <div className='min-h-screen h-full w-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-4xl font-bold text-white text-center mb-8 drop-shadow-lg'>
                    Redux Toolkit Demo
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-500'>
                            State Change
                        </h2>
                        <User />
                    </div>
                    <div className='bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-500'>
                            Todo App
                        </h2>
                        <Form />

                        {
                            todo.length == 0 ? <h1>Добвте задача</h1>:
                            todo.map((item , index)=>(

                                <TodoItem key={index} name={item.name} compalted= {item.complated}
                                id={item.id}
                                />
                            ))
                        }

                    </div>
                    <div className='bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500'>
                            Async Thunk
                        </h2>
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App