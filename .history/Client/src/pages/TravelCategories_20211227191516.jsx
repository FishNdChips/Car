import React from "react";
import Navbarhome from "../components/Navbarhome";
import "./travelcategories.css";
import CategoryCard from "../components/CategoryCard";
import citiesImage from "../assets/images/UB_downtown.jpg";

const TravelCategories = () => {
  return (
    <Nav
    <div className="travelcategories-container">
      <div className="travelcategories-middle-container">
        <CategoryCard title="ערים" backgroundImage={citiesImage} />
        <CategoryCard title="בילויים" backgroundImage={citiesImage} />
      </div>
    </div>
  );
};

export default TravelCategories;
