import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import './login__modal.css'
export default function Login__modal_close({close}) {
  return (
    <div className='login__modal_close'>
        <AiFillCloseCircle className='close' onClick={()=>close(false)}/>
    </div>
  )
}
