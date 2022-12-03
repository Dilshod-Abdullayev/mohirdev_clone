import React from 'react';
import PracticumText from './Practicum__text';
import './practicum.css'
import Practicums from './Practicums';

const Practicum = () => {
    return (
        <div className='practicum'>
            <PracticumText/>
            <Practicums/>
        </div>
    );
}

export default Practicum;
