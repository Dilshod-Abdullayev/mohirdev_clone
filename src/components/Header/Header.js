import React,{useState} from 'react'
import Nav from './Navbar/Nav'
import Wrapper from './Wrapper/Wrapper'
import '../../styles/header.css'
export default function Header() {
  const [open,setOpen]=useState(false)
  return (
    <div className='header'>
        <Nav setopen={setOpen}/>
        <div className="container">
        <Wrapper modal={{open,setOpen}} />
        </div>
    </div>
  )
}
