import React from 'react'
import './buttonhome.css'

const Buttonhome = ({content}) => {
    return (
        <div className = 'buttonhome-container'>
            <button className='button-home'>{content}</button>
        </div>
    )
}

export default Buttonhome
