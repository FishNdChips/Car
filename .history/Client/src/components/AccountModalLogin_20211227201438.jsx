import React, { useState } from "react";
import "./accountmodallogin.css";
import closeButton from "../assets/images/closeButton.png";
import Accountitem from "./Accountitem";
import Switchregistrationtypebutton from "./Switchregistrationtypebutton";


const AccountModalLogin = (props) => {
  return <div className ='accountmodallogin-container'>
      <form className="register-modal">
        <img
          src={closeButton}
          className="accountmodal-close-button"
          onClick={() => {
            props.handleshowDriverRegistration(false);
            props.handleshowTravelerRegistration(false);
          }}
          alt="closeButton"
      <h1>הגעת לתפריט ההתחברות</h1>
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
        </form>
  </div>
};

export default AccountModalLogin;
