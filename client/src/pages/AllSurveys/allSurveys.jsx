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
import axios from "axios"

const ProfileTypePage = () => {
  const [surveys, setSurveys] = useState([]);



  useEffect(() => {
    axios({
      method: "GET",
      url: "/selectall?tablename=" + "Surveys",
    })
      .then((response) => {
        console.log("in axios");
        console.log(response.data);
        setSurveys(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
    //Handles rerender on selection switch
  }, [surveys]);

  function SurveyCard({ name, description, type }) {
    return (
      <div className="cardOption">
        <h className="cardTitle">{name}</h>
        <h className="cardDescription">{type}</h>
        <h className="cardDescription">{description}</h>
        <Form.Button content="Edit/Preview Survey" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <h className="CPC"></h>
      <h className="CPC">All Saved Surveys</h>
      <div className="surveyArea">
        {surveys.map((profile) => (
          <SurveyCard {...profile} key={profile.name} />
        ))}
      </div>
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button content="Return to Dashboard" />
      </div>
    </>
  );
};

export default ProfileTypePage;
