import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import "./dashboard.css";
import { Link } from "react-router-dom";

const DashBoardPage = () => {
  return (
    <>
      <Navbar />

      <h1 className="newTitle">Welcome Back, Admin</h1>
      <div className="bottomButtons">
        <div className="button">
            <div className="cardInfoSelected">
              <h1 className="cardTitle">100</h1>
              <Link to="/surveys">Surveys Submitted</Link>
            </div>
          </div>
          <div className="button">
            <div className="cardInfoSelected">
              <h1 className="cardTitle">75</h1>
              <Link to="/surveys">URE Surveys Submitted</Link>
            </div>
          </div>
          <div className="button">
            <div className="cardInfoSelected">
              <h1 className="cardTitle">25</h1>
              <Link to="/surveys">Professional Surveys Submitted</Link>
            </div>
          </div>
        </div>
      <div>
        <h1 className="newTitle2">Survey Schema</h1>
        <div className="bottomButtons">
          <div className="button">
            <div className="cardInfoSelected">
              <Link to="/surveys">URE Survey</Link>
              <h2 className="cardDescription">Edited 04/15/22</h2>
            </div>
          </div>
          <div className="button">
          <div className="cardInfoSelected">
              <Link to="/surveys">Professional Survey</Link>
              <h2 className="cardDescription">Edited 04/15/22</h2>
            </div>
          </div>
          <div className="addbutton">
          <Link to="/createSurvey">Add New Survey</Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="Title2">Drafts</h2>
        <div className="bottomButtons">
          <div className="button">
            <div className="cardInfoSelected">
              <Link to="/surveys">URE Survey 2 [draft]</Link>
              <h2 className="cardDescription">Edited 04/15/22</h2>
            </div>
          </div>
          <div className="button">
          <div className="cardInfoSelected">
              <Link to="/surveys">Professional Survey 2 [draft]</Link>
              <h2 className="cardDescription">Edited 04/15/22</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="newTitle2">Profile Types</h1>
        <div className="bottomButtons">
          <div className="profilebutton">
            <div className="cardInfoSelected">
              <h1 className="cardTitle">URE Profile</h1>
              <h2>Description:</h2>
              <p>This is a profile used by undergraduate survey takers in the STEM academic majors.</p>
            </div>
          </div>
          <div className="profilebutton">
          <div className="cardInfoSelected">
              <h1 className="cardTitle">Professional Profile</h1>
              <h2>Description:</h2>
              <p>This is a profile used by professional survey takers in the STEM career fields.</p>
            </div>
          </div>
          <div className="addbutton">
          <Link to="/createProfileType">Add New Profile Type</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
