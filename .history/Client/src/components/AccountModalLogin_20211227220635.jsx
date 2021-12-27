import React, { useState } from "react";
import "./accountmodallogin.css";
import closeButton from "../assets/images/closeButton.png";
import Accountitem from "./Accountitem";
import Switchregistrationtypebutton from "./Switchregistrationtypebutton";

const AccountModalLogin = (props) => {
  return (
    <div className="accountmodallogin-container">
      <form className="login-modal">
        <img
          src={closeButton}
          className="accountmodal-close-button"
          onClick={() => {
            props.handleshowDriverRegistration(false);
            props.handleshowTravelerRegistration(false);
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
          }}
        >
          לא קיים ברשותך חשבון? לחץ כאן כדי להרשם
        </p>
      </form>
    </div>
  );
};

export default AccountModalLogin;
