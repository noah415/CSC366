import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { StylesContext } from "@material-ui/styles";
//import AddIcon from "@mui/icons-material/Add";
//import { useNavigate, Link } from "react-router-dom";

const CreateSurveyPage = () => {
  const [formData, setFormData] = useState({});
  const [profileType, setProfileType] = useState('');
  const [questions, setQuestions] = useState({
  });

  const handleChange = (e, { name, value }) =>
    setFormData({ ...formData, [name]: value });

  const handleAgeChange = (event) =>
    setProfileType(event.target.value)

  return (
    <>
      <Navbar />
      <form className="form">
        <input
          className="pTitle"
          placeholder="Survey Title"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Description"
          className="pDescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </form>
      <div >
      <FormControl size="small" variant="filled">
  <InputLabel id="demo-simple-select-label">Select Profile Type</InputLabel>
  <Select
    labelId="profileType"
    id="profileType"
    value={profileType}
    label="Select Profile Type"
    onChange={handleAgeChange}
  >
    <MenuItem value={'URE'}>URE</MenuItem>
    <MenuItem value={'Professional'}>Professional</MenuItem>
  </Select>
</FormControl>
      </div>      
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button content="Add Question" className="button" />
      </div>
<div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button content="Publish Survey" className="button" />
        {/* </Link> */}
        <Form.Button
          content="Save Survey"
          className="button"
        />
      </div>
    </>
  );
};

export default CreateSurveyPage;
