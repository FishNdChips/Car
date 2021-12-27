import React from 'react'
import Navbarhome from './Navbarhome'
import './travelcategories.css'
import CategoryCard from './CategoryCard'
import 

const TravelCategories = () => {
    return (
        <div className='travelcategories-container'>
            <Navbarhome/>
            <div className='travelcategories-middle-container'>
                <CategoryCard title='איזורים' backgroundImage='../assets/images/UB_downtown'/>
            </div>
        </div>
    )
}

export default TravelCategories
