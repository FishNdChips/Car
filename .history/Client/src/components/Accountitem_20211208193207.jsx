import React, { useState } from "react";
import "./Accountitem.css";
import calendarIcon from "../assets/images/calendar-icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
{} ==={}
const Accountitem = ({ id, fieldName, labelName, placeholder, type }) => {
  console.log(fieldName);
  console.log(id);
  return (
    <div className="Accountitem-container">
      <label for={labelName} className="Accountitem-label">
        <b>{fieldName}</b>
        {fieldName === "תאריך לידה" ? (
          <img src={calendarIcon} alt="" className="registration-calender" 
          />

        ) : null}

      </label>
      <input
        className="Accountitem-input"
        type={type}
        placeholder={placeholder}
        name={labelName}
        id={labelName}
        required
      />
    </div>
  );
};

export default Accountitem;
