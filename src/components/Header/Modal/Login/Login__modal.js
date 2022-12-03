import React from 'react'
import Login__modal_close from './Login__modal_close'
import './login__modal.css'
export default function Login__modal({close}) {
  return (
    <div className='login__modal'>
         <Login__modal_close  close={close} />
         <h2>Saytga kirish</h2>
         <input type={'text'} />
         <input type={"password"} />
         <button>Kirish</button>
         <br />
         <p>Yangimisz <a href=''>Ro'yhatdan o'ting</a></p>
    </div>
  )
}