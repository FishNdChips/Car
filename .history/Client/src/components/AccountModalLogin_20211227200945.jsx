import React, { useState } from "react";
import "./accountmodal.css";
import closeButton from "../assets/images/closeButton.png";
import Accountitem from "./Accountitem";
import Switchregistrationtypebutton from "./Switchregistrationtypebutton";

const AccountModalLogin = () => {
  return <div>
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
  </div>
};

export default AccountModalLogin;
