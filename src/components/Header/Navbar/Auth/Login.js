import React, { useState } from 'react'
import Login__modal from '../../Modal/Login/Login__modal'
import './../nav.css'

export default function Login({setopen}) {

  return (
    <div className='login'>
      <button onClick={()=>setopen(true)}>Kirish</button>
    </div>
  )
}
