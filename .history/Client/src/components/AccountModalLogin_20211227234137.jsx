import React, { useState } from "react";
import "./accountmodallogin.css";
import closeButton from "../assets/images/closeButton.png";
import Accountitem from "./Accountitem";
import Switchregistrationtypebutton from "./Switchregistrationtypebutton";

const Accountmodallogin = (props) => {
  return (
    <div className="accountmodallogin-container">
      <form className="login-modal">
        <img
          src={closeButton}
          className="accountmodal-close-button"
          onClick={() => {
            props.handleshowDriverRegistration(false);
            props.handleshowTravelerRegistration(false);
            props.handleshowDriverLogin(false);
            props.handleshowTravelerLogin(false);
          }}
          alt="closeButton"
        />
        <div className="register-buttons">
          <Switchregistrationtypebutton
            buttonContent="נהג"
            handleshowTravelerRegistration={
              props.handleshowTravelerRegistration
            }
            handleshowDriverRegistration={props.handleshowDriverRegistration}
            showTravelerRegistration={props.showTravelerRegistration}
            showDriverRegistration={props.showDriverRegistration}
            handleshowTravelerLogin={props.handleshowTravelerLogin}
            handleshowDriverLogin={props.handleshowDriverLogin}
            showTravelerLogin={props.showTravelerLogin}
            showDriverLogin={props.showDriverLogin}
            handleShowRegistrationOrLogin={props.handleShowRegistrationOrLogin}
            showRegistrationOrLogin={props.showRegistrationOrLogin}
            driveOrTraveler={false}
          />
          <Switchregistrationtypebutton
            buttonContent="נוסע"
            handleshowTravelerRegistration={
              props.handleshowTravelerRegistration
            }
            handleshowDriverRegistration={props.handleshowDriverRegistration}
            showTravelerRegistration={props.showTravelerRegistration}
            showDriverRegistration={props.showDriverRegistration}
            handleshowTravelerLogin={props.handleshowTravelerLogin}
            handleshowDriverLogin={props.handleshowDriverLogin}
            showTravelerLogin={props.showTravelerLogin}
            showDriverLogin={props.showDriverLogin}
            driverOrTraveler={true}
            handleShowRegistrationOrLogin={props.handleShowRegistrationOrLogin}
            showRegistrationOrLogin={props.showRegistrationOrLogin}
          />
        </div>
        <h1 className="title-modal">{props.title}</h1>
        {props.fields.map((field) => (
          <Accountitem
            id={field.id}
            fieldName={field.fieldName}
            labelName={field.labelName}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <button className="submit-button-modal">התחבר</button>
        <p
          style={{ color: "white" }}
          className="accountmodal-switch"
          onClick={() => {
            props.handleShowRegistrationOrLogin(true);
            props.handleshowDriverRegistration(true)
            props.handleshowTravelerRegistration(false)
            props.handleshowDriverLogin(false)
            props.handleshowTravelerLogin(true)
          }}
        >
          לא קיים ברשותך חשבון? לחץ כאן כדי להרשם
        </p>
      </form>
    </div>
  );
};

export default Accountmodallogin;
