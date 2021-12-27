import React from "react";
import "./switchregistrationtypebutton.css";

const Switchregistrationtypebutton = ({
  buttonContent,
  handleshowDriverRegistration,
  handleshowTravelerRegistration,
  showDriverRegistration,
  showTravelerRegistration,
  handleshowDriverLogin,
  handleshowTravelerLogin,
  showDriverLogin,
  showTravelerLogin,
}) => {

  const changeButton = () => {
    if (showDriverRegistration && buttonContent==='נוסע') {
      handleshowDriverRegistration(false);
      handleshowTravelerRegistration(true);
      handleshowDriverLogin
    } else if (showTravelerRegistration && buttonContent==='נהג') {
      handleshowTravelerRegistration(false);
      handleshowDriverRegistration(true);
    }
  };

  
  //traveler is true driver is false

  return (
    <div className="switchregistrationtypebutton-container">
      {console.log(buttonContent)}
      <button
        className={'l'? "switch-button-active" : "switch-button"}
        onClick={()=>{changeButton(); }}
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default Switchregistrationtypebutton;
