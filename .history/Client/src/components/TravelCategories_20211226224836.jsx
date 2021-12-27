import React from 'react'
import Navbarhome from './Navbarhome'
import './travelcategories.css'
import CategoryCard from './CategoryCard'

const TravelCategories = () => {
    return (
        <div className='travelcategories-container'>
            <Navbarhome/>
            <div className='travelcategories-middle-container'>
                <CategoryCard title=''/>
            </div>
        </div>
    )
}

export default TravelCategories
