import React, { useState } from "react";
import "./accountmodallogin.css";
import closeButton from "../assets/images/closeButton.png";
import Accountitem from "./Accountitem";
import Switchregistrationtypebutton from "./Switchregistrationtypebutton";

const AccountModalLogin = (props) => {
  return (
    <div className="accountmodallogin-container">
      <form className="login-modal">
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
            props.handleShowRegistrationOrLogin(false);
          }}
        >
          קיים ברשותך חשבון? לחץ כאן כדי להתחבר
        </p>
      </form>
    </div>
  );
};

export default AccountModalLogin;
