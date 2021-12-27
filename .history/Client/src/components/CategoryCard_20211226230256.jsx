import React from 'react'
import './categorycard.css'

const CategoryCard = ({title, backgroundImage}) => {
    return (
        <div className='categorycard-container' style={{backgroundImage:PbackgroundImage}}>
            <p>{title}</p>
        </div>
    )
}

export default CategoryCard
