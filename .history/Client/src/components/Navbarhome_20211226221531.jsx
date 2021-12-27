import React from "react";
import "./navbarhome.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbarhome = ({ handleshowDriverRegistration }) => {
  return (
    <ul className="navbarhome-container">
      <li
        className="navbar-item"
        onClick={() => {
          handleshowDriverRegistration(true);
        }}
      >
        <Icon icon="mdi:account-circle" color="white" width="34" height="34" />
      </li>
      <Link to="/home"
      <li className="navbar-item">דף הבית</li>
      <li className="navbar-item">נסיעות</li>
      <li className="navbar-item">אודותינו</li>
      <li className="navbar-item"></li>
      <li className="navbar-item"></li>
    </ul>
  );
};

export default Navbarhome;
