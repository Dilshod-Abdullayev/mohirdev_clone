import React from 'react'
import Login from './Login'
import Sign from './Sign'
import './../nav.css'
export default function Auth({setopen}) {
  return (
    <div className='auth'>
        <Login setopen={setopen}/>
        |
        <Sign/>
    </div>
  )
}
