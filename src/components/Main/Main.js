import React from 'react';
import Fest from '../Fest/Fest';
import Header from '../Header/Header';
import '../../styles/main.css'
import Practicum from '../Practicum/Practicum';
const Main = () => {
    return (
        <div className='main'>
            <Header/>
            <Fest/>
            <Practicum/>
        </div>
    );
}

export default Main;
