import React from "react";
import "./navbarhome.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbarhome = ({ handleshowDriverRegistration, handleShowRegistrationOrLogin }) => {
  return (
    <ul className="navbarhome-container">
      <li
        className="navbar-item"
        onClick={() => {
          handleshowDriverL(true);
          handleShowRegistrationOrLogin(false)
        }}
      >
        <Icon icon="mdi:account-circle" color="white" width="34" height="34" />
      </li>
      <Link to="/">
        <li className="navbar-item">דף הבית</li>
      </Link>
      <Link to='/categories'>
        <li className="navbar-item">נסיעות</li>
      </Link>
      <li className="navbar-item">אודותינו</li>
      <li className="navbar-item"></li>
      <li className="navbar-item"></li>
    </ul>
  );
};

export default Navbarhome;
