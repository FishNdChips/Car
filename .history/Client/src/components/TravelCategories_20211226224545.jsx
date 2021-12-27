import React from 'react'
import CategoryCard from './CategoryCard'
import Navbarhome from './Navbarhome'
import './travelcategories.css'

const TravelCategories = () => {
    return (
        <div className='travelcategories-container'>
            <Navbarhome/>
            <div className='travelcategories-middle-container'>
                <CategoryCard title='איזורים'/>
            </div>
        </div>
    )
}

export default TravelCategories
