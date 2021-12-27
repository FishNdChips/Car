import React from 'react'
import Navbarhome from './Navbarhome'
import './travelcategories.css'
import CategoryCard from './CategoryCard'
import citiesImage from '../assets/images/UB_downtown.jpg'

const TravelCategories = () => {
    return (
        <div className='travelcategories-container'>
            <Navbarhome/>
            <div className='travelcategories-middle-container'>
                <CategoryCard title='ערים' backgroundImage={citiesImage}/>
            </div>
        </div>
    )
}

export default TravelCategories
