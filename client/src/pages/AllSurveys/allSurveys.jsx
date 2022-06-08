import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import data from "./allSurveysData";
import "./allSurveys.css";
import "../../connections/select";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate, Link } from "react-router-dom";
import { selectAllCall, selectCall } from "../../connections/select";

const ProfileTypePage = () => {
  const [selectedTypes] = useState([]);
  const [remainingTypes, setRemainingTypes] = useState([]);

  useEffect(() => {
    //Connect to backend to get all survets
    setRemainingTypes(
      //selectAllCall("Surveys")
      //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
      data
    );
  }, []);

  useEffect(() => {
    //Handles rerender on selection switch
  }, [selectedTypes, remainingTypes]);

  function SurveyCard({ name, description }) {
    return (
      <div className="cardOption">
        <h className="cardTitle">{name}</h>
        <h className="cardDescription">{description}</h>
        <Form.Button content="Edit/Preview Survey" className="button" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <h className="CPC"></h>
      <h className="CPC">All Saved Surveys</h>
      <div className="surveyArea">
        {remainingTypes.map((profile) => (
          <SurveyCard {...profile} key={profile.name} />
        ))}
      </div>
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button content="Return to Dashboard" className="button" />
      </div>
    </>
  );
};

export default ProfileTypePage;
