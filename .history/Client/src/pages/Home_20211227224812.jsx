import React, { useState } from "react";
import Accountmodal from "../components/Accountmodal";
import Landingcover from "../components/Landingcover";
import Navbarhome from "../components/Navbarhome";
import Slider from "../components/Slider";
import Acountmodallogin from "../components/Accountmodallogin";
import "./home.css";

const driverRegistrationFields = [
  {
    id: 1,
    fieldName: "שם משתמש",
    labelName: "username",
    placeholder: "הכנס שם משתמש",
    type: "text",
  },
  {
    id: 2,
    fieldName: "אימייל",
    labelName: "email",
    placeholder: "הכנס אימייל",
    type: "text",
  },
  {
    id: 3,
    fieldName: "סיסמא",
    labelName: "password",
    placeholder: "הכנס סיסמא",
    type: "password",
  },
  {
    id: 4,
    fieldName: "סיסמא שנית",
    labelName: "psw-repeat",
    placeholder: "הכנס סיסמא שנית",
    type: "password",
  },
  {
    id: 5,
    fieldName: "רישיון נהיגה",
    labelName: "license-number",
    placeholder: "הכנס מספר רישיון נהיגה",
    type: "text",
  },
  {
    id: 6,
    fieldName: "תאריך לידה",
    labelName: "birth-date",
    placeholder: "הכנס תאריך לידה",
    type: "text",
  },
];
const travelerRegistrationFields = [
  {
    id: 1,
    fieldName: "שם משתמש",
    labelName: "username",
    placeholder: "הכנס שם משתמש",
    type: "text",
  },
  {
    id: 2,
    fieldName: "אימייל",
    labelName: "email",
    placeholder: "הכנס אימייל",
    type: "text",
  },
  {
    id: 3,
    fieldName: "סיסמא",
    labelName: "password",
    placeholder: "הכנס סיסמא",
    type: "password",
  },
  {
    id: 4,
    fieldName: "סיסמא שנית",
    labelName: "psw-repeat",
    placeholder: "הכנס סיסמא שנית",
    type: "password",
  },
  {
    id: 5,
    fieldName: "תעודת זהות",
    labelName: "id-number",
    placeholder: "נא הכנס תעודת זהות",
    type: "text",
  },
  {
    id: 6,
    fieldName: "תאריך לידה",
    labelName: "birth-date",
    placeholder: "הכנס תאריך לידה",
    type: "text",
  },
];

const driverLoginFields = [
  {
    id: 1,
    fieldName: "שם משתמש",
    labelName: "username",
    placeholder: "הכנס שם משתמש",
    type: "text",
  },
  {
    id: 2,
    fieldName: "סיסמא",
    labelName: "password",
    placeholder: "הכנס סיסמא",
    type: "password",
  },
];

const Home = () => {
  const [showDriverRegistration, handleshowDriverRegistration] =
    useState(false);
  const [showTravelerRegistration, handleshowTravelerRegistration] =
    useState(false);
  const [showTravelerLogin, handleshowTravelerLogin] = useState(false);
  const [showDriverLogin, handleshowDriverLogin] = useState(false);
  const [showRegistrationOrLogin, handleShowRegistrationOrLogin] =
    useState(true);
  console.log(showDriverRegistration);

  return (
    <div className="home-container">
      <div className="home-navbar-container">
        <Navbarhome
          handleshowDriverRegistration={handleshowDriverRegistration}
          handleshowDriverRegistration={handleshowDriverRegistration}
        />
      </div>
      <div className="home-top-container">
        <Landingcover
          title="Carpool"
          body="לכל מקום, בכל שעה!"
          image='../assets/images/meh.jpg"'
        />
        {showDriverRegistration && showRegistrationOrLogin ? (
          <Accountmodal
            handleshowDriverRegistration={handleshowDriverRegistration}
            showDriverRegistration={showDriverRegistration}
            handleshowTravelerRegistration={handleshowTravelerRegistration}
            showTravelerRegistration={showTravelerRegistration}
            handleshowDriverLogin={handleshowDriverLogin}
            showDriverLogin={showDriverLogin}
            handleshowTravelerLogin={handleshowTravelerLogin}
            showTravelerLogin={showTravelerLogin}
            fields={driverRegistrationFields}
            title="הרשמה כנהג"
            handleShowRegistrationOrLogin={handleShowRegistrationOrLogin}
          />
        ) : null}
        {showTravelerRegistration && showRegistrationOrLogin ? (
          <Accountmodal
            handleshowTravelerRegistration={handleshowTravelerRegistration}
            showTravelerRegistration={showTravelerRegistration}
            handleshowDriverRegistration={handleshowDriverRegistration}
            showDriverRegistration={showDriverRegistration}
            handleshowDriverLogin={handleshowDriverLogin}
            showDriverLogin={showDriverLogin}
            handleshowTravelerLogin={handleshowTravelerLogin}
            showTravelerLogin={showTravelerLogin}
            fields={travelerRegistrationFields}
            title="הרשמה כנוסע"
            handleShowRegistrationOrLogin={handleShowRegistrationOrLogin}
          />
        ) : null}
        {!showRegistrationOrLogin && showDriverLogin ? (
          <Acountmodallogin
            handleshowTravelerRegistration={handleshowTravelerRegistration}
            showTravelerRegistration={showTravelerRegistration}
            handleshowDriverRegistration={handleshowDriverRegistration}
            showDriverRegistration={showDriverRegistration}
            handleshowDriverLogin={handleshowDriverLogin}
            showDriverLogin={showDriverLogin}
            showTravelerLogin={showTravelerLogin}
            fields={driverLoginFields}
            title="התחברות כנוסע"
            handleShowRegistrationOrLogin={handleShowRegistrationOrLogin}
            handleshowDriverLogin={handleshowDriverLogin}
            handleshowTravelerLogin={handleshowTravelerLogin}
          />
        ) : null}
        {!showRegistrationOrLogin && showTravelerLogin ? (
          <Acountmodallogin
            handleshowTravelerRegistration={handleshowTravelerRegistration}
            showTravelerRegistration={showTravelerRegistration}
            handleshowDriverRegistration={handleshowDriverRegistration}
            showDriverRegistration={showDriverRegistration}
            handleshowDriverLogin={handleshowDriverLogin}
            showDriverLogin={showDriverLogin}
            showTravelerLogin={showTravelerLogin}
            fields={driverLoginFields}
            title="התחברות כנוסע"
            handleShowRegistrationOrLogin={handleShowRegistrationOrLogin}
            handleshowDriverLogin={handleshowDriverLogin}
            handleshowTravelerLogin={handleshowTravelerLogin}
          />
        ) : null}
      </div>
      <div className="home-bottom-container">
        <h1 style={{ color: "white" }}>חוויות בקארפול!</h1>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
