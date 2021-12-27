import React from 'react'
import Navbarhome from './Navbarhome'
import './travelcategories.css'
import CategoryCard from './CategoryCard'
import citiesImage from '../assets/images/UB_downtown'

const TravelCategories = () => {
    return (
        <div className='travelcategories-container'>
            <Navbarhome/>
            <div className='travelcategories-middle-container'>
                <CategoryCard title='cities' backgroundImage='../assets/images/UB_downtown'/>
            </div>
        </div>
    )
}

export default TravelCategories
