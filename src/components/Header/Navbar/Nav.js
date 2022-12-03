import React from 'react'
import Logo from './Logo'
import Lists from './Lists'
import Auth from './Auth/Auth'
import './nav.css'
export default function Nav({setopen}) {
  return (
    <div className='navbar'>
        <div className="nav__left">
          <Logo/>
          <Lists/>
          </div>
          <Auth setopen={setopen} />
    </div>
  )
}