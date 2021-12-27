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
  showRegistrationOrLogin,
  handleShowRegistrationOrLogin,
}) => {
  const changeButton = () => {
    if (showDriverRegistration && buttonContent === "נוסע") {
      handleshowDriverRegistration(false);
      handleshowTravelerRegistration(true);
      handleshowDriverLogin(false);
      handleshowTravelerLogin(false);
      handleShowRegistrationOrLogin(true);
    } else if (showTravelerRegistration && buttonContent === "נהג") {
      handleshowTravelerRegistration(false);
      handleshowDriverRegistration(true);
      handleshowDriverLogin(false);
      handleshowTravelerLogin(false);
      handleShowRegistrationOrLogin(true);
    } else if (showTravelerLogin && buttonContent === "נהג") {
      handleshowTravelerRegistration(false);
      handleshowDriverRegistration(false);
      handleshowDriverLogin(true);
      handleshowTravelerLogin(false);
      handleShowRegistrationOrLogin(false);
    } else if (showDriverLogin && buttonContent === "נוסע") {
      handleshowTravelerRegistration(false);
      handleshowDriverRegistration(false);
      handleshowDriverLogin(false);
      handleshowTravelerLogin(true);
      handleShowRegistrationOrLogin(false);
    }
  };

  //traveler is true driver is false

  return (
    <div className="switchregistrationtypebutton-container">
      {console.log(buttonContent)}
      <button
        className={"l" ? "switch-button-active" : "switch-button"}
        onClick={() => {
          changeButton();
          console.log(showDriverLogin);
          console.log(showTravelerLogin);
          console.log(showRegistrationOrLogin);
        }}
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default Switchregistrationtypebutton;
