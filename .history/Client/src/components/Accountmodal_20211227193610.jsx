import React, { useState } from "react";
import "./accountmodal.css";
import closeButton from "../assets/images/closeButton.png";
import Accountitem from "./Accountitem";
import Switchregistrationtypebutton from "./Switchregistrationtypebutton";

const Accountmodal = (props, {handleShowRegistrationOrLogin}) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="accountmodal-container">
      <form className="register-modal">
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
        <div className="accountmodal-bottom">
          <button className="submit-button-modal">הרשם</button>
            <p style={{ color: "white" }} className="accountmodal-switch" onClick={()=>{handleShowRegistrationOrLogin(false)}}>
              קיים ברשותך חשבון? לחץ כאן כדי להתחבר
            </p>
        </div>
      </form>
    </div>
  );
};

export default Accountmodal;

// id: 1,
//     fieldName: "שם משתמש",
//     labelName: "username",
//     placeholder: "הכנס שם משתמש",
//     type: "text",
