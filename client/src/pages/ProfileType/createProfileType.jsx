import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import data from "./profileType";
import "./createProfileType.css";
import "../../connections/select"
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate, Link } from "react-router-dom";
import { selectAllCall, selectCall } from "../../connections/select";

const ProfileTypePage = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [remainingTypes, setRemainingTypes] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    //Connect to backend to get all profileType options
    setRemainingTypes(
      // selectAllCall("ValueCharacteristics") //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
      data
    );
  }, []);

  useEffect(() => {
    //Handles rerender on selection switch
  }, [selectedTypes, remainingTypes]);

  function ProfileTypeCardSelected({ name, description, type }) {
    return (
      <div className="cardSelected">
        <div className="cardInfoSelected">
          <h className="cardTitle">{name}</h>
          <h className="cardType">{type}</h>
          <h className="cardDescription">{description}</h>
        </div>
        {getDelete({ name, description, type })}
      </div>
    );
  }

  function ProfileTypeCardOption({ name, description, type }) {
    return (
      <div className="cardOption">
        <div className="cardInfoOption">
          <h className="cardTitle">{name}</h>
          <h className="cardType">{type}</h>
          <h className="cardDescription">{description}</h>
        </div>
        {getAddition({ name, description, type })}
      </div>
    );
  }

  function getValueCharacteristics() {
    return selectAllCall("ValueCharacteristics");
  }

  const postProfileType = () => {
    //insert form Data into  sql attributes name and description where name is primary key
    // Note THIS INSERT MUST HAPPEN BEFORE THE FOLLOWING
    console.log(formData);
    console.log(selectedTypes);

    //for each selected type add to the ProfileValueConntections table the name of the profileType and the name of the profile characterisitc as foreign keys
    //navigate("/");
    //function to post formData
  };

  const handleDelete = (obj) => {
    removeCharacteristic(obj.name, "selected");
    addCharacteristic(obj, "remaining");
  };

  const handlePlus = (obj) => {
    removeCharacteristic(obj.name, "remaining");
    addCharacteristic(obj, "selected");
  };

  const getDelete = (option) => {
    return (
      <div>
        <IconButton
          style={{ color: "white" }}
          onClick={() => handleDelete(option)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  };

  const getAddition = (option) => {
    return (
      <div>
        <IconButton
          style={{ color: "black" }}
          onClick={() => handlePlus(option)}
        >
          <AddIcon />
        </IconButton>
      </div>
    );
  };

  const handleChange = (e, { name, value }) => {
    console.log(name);
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const removeCharacteristic = (charName, listName) => {
    if (listName === "selected") {
      setSelectedTypes(
        selectedTypes.filter((item) => item.name !== charName)
        //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
      );
    } else {
      setRemainingTypes(
        remainingTypes.filter((item) => item.name !== charName)
        //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
      );
    }
  };

  const addCharacteristic = (charObj, listName) => {
    if (listName === "selected") {
      setSelectedTypes(
        selectedTypes.concat(charObj)
        //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
      );
    } else {
      setRemainingTypes(
        remainingTypes.concat(charObj)
        //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
      );
    }
  };

  return (
    <>
      <Navbar />
      <Form className="form">
        <Form.Input
          className="pTitle"
          placeholder="Profile Type Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Form.Input
          placeholder="Description"
          className="pDescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </Form>
      <h className="CPC">Choose Profile Characteristics</h>
      <div className="selectionArea">
        <div className="leftSide">
          <h1 className="columnLabels">Profile Characteristic Options</h1>
          {remainingTypes.map((profile) => (
            <ProfileTypeCardOption {...profile} key={profile.name} />
          ))}
        </div>
        <div className="rightSide">
          <h1 className="columnLabels">Profile Characteristics Selected</h1>
          {selectedTypes.map((profile) => (
            <ProfileTypeCardSelected {...profile} key={profile.name} />
          ))}
        </div>
      </div>
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button content="Return to Dashboard" className="button" />
        {/* </Link> */}
        <Form.Button
          content="Submit"
          className="button"
          onClick={postProfileType}
        />
      </div>
    </>
  );
};

export default ProfileTypePage;
