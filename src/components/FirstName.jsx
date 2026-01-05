import React from 'react'
import {useSelector} from "react-redux"

export default function FirstName() {

  const user = useSelector((state)=> state.user.firstname)

  return (
    <div className='font-semibold text-indigo-700'>{user}</div>
  )
}
