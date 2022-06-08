import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { StylesContext } from "@material-ui/styles";
import QuestionCard from "./questionCard";
import "./editSurvey.css";
//import AddIcon from "@mui/icons-material/Add";
//import { useNavigate, Link } from "react-router-dom";

const EditSurveyPage = (SurveyID) => {
  const [formData, setFormData] = useState([]);
  const [questions, setQuestions] = useState([]);

  const questionCardToSurvey = (newQuestion) => {
    var newQuestions = questions;
    newQuestions.pop();
    newQuestions = newQuestions.concat([newQuestion]);
    setQuestions(newQuestions);
  };

  const delelteQ = (delQuestion) => {
    console.log("Q to del");
    console.log(delQuestion);
    var filteredQs = questions.filter(
      (e) =>
        !(
          e.surveyId === delQuestion.surveyId &&
          e.qNumber === delQuestion.qNumber
        )
    );
    console.log(filteredQs);
    setQuestions(filteredQs);
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: "/select?tablename=" + "Surveys",
      data: { id: 1 },
    })
      .then((response) => {
        console.log("in axios");
        console.log(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    axios({
      method: "POST",
      url: "/select?tablename=" + "Questions",
      data: { sId: 1 },
    })
      .then((response) => {
        console.log("in axios");
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    //Handles rerender on selection switch
  }, []);

  const publishSurvey = async (e) => {
    console.log("Publish Survey Data");
    console.log(formData);
    console.log(questions);
    await axios.post("/insert?tablename=Surveys", formData);
    //need to get the auto incremented id from mySQL to post questions
    let surveyClause = {
      name: formData["name"],
      description: formData["description"],
    };
    const survey = await axios.post("/select?tablename=Surveys", surveyClause);
    const surveyId = survey.data[0]["id"];
    console.log(survey);

    let questionData = {};
    for (let i = 0; i < questions.length; i++) {
      questionData = {
        sId: surveyId,
        position: i,
        prompt: "demo spot",
        questionType: questions[i]["questionType"],
        valueCharachteristic: "General",
      };
      await axios.post("/insert?tablename=Questions", questionData);
    }
  };

  const saveSurvey = (e) => {
    console.log("Save Survey Data");
    console.log(formData);
    console.log(questions);
  };

  const addQuestion = (e) => {
    console.log(questions);
    const newQ = {
      position: questions.length + 1,
      questionType: "Scale",
      //questions: questions,
      //setQuestions: setQuestions,
    };

    setQuestions(questions.concat([newQ]));
  };

  const getQuestions = () => {
    return (
      <>
        {questions.map((question) => (
          <QuestionCard {...question} key={question.prompt} />
        ))}
      </>
    );
  };

  const handleChange = (e, { name, value }) =>
    setFormData({ ...formData, [name]: value });

  const handleChangeDropQ = (test) =>
    //(rawQ["questionType"] = test.target.value);
    setFormData({ ...formData, type: test.target.value });

  const Dropdown = (options) => {
    return (
      <select
        className="qTypeDrop"
        name="questionType"
        value={formData.questionType}
        onChange={handleChangeDropQ}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <Navbar />
      <Form className="surveyForm">
        <Form.Input
          className="pTitle"
          placeholder="Survey Title"
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
      <div className="qArea">
        <div>
          {Dropdown(["Undergraduate Research Experience", "Professional"])}
        </div>
        <div className="questions">{getQuestions()}</div>
        <div className="bottomButtons">
          {/* <Link to="/"> */}
          <Form.Button content="Add Question" onClick={addQuestion} />
        </div>
      </div>
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button content="Publish Survey" onClick={publishSurvey} />
        {/* </Link> */}
        <Form.Button content="Save Survey" onClick={saveSurvey} />
      </div>
    </>
  );
};

export default EditSurveyPage;
