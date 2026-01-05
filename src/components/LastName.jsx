import React from 'react'
import { useSelector } from 'react-redux'

export default function LastName() {
  const lastName = useSelector((state)=>state.user.lastname)
  return (
    <div className='font-semibold text-indigo-700'>{lastName}</div>
  )
}
