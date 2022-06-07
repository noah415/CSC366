import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
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
//import AddIcon from "@mui/icons-material/Add";
//import { useNavigate, Link } from "react-router-dom";

const CreateSurveyPage = () => {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random()),
    name: "Survey Title",
    description: "Survey Description",
    type: "Undergraduate Research Experience",
  });
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
    console.log(questions);
    // questions.splice(questions.length - 1);
    // setQuestions(
    //   questions //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
    // );
    // setQuestions(
    //   questions.concat([cardData]) //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
    // );
  }, [questions]);

  const publishSurvey = (e) => {
    console.log("Publish Survey Data");
    console.log(formData);
    console.log(questions);
  };

  const saveSurvey = (e) => {
    console.log("Save Survey Data");
    console.log(formData);
    console.log(questions);
  };

  const addQuestion = (e) => {
    console.log(questions);
    const newQ = {
      sId: formData.sId,
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
          <QuestionCard
            rawQ={question}
            questionCardToSurvey={questionCardToSurvey}
            deleteQuestion={delelteQ}
            //surveyId={formData.name}
            //qNumber={questions.length + 1}
            //questions={questions}
            //setQuestions={setQuestions}
          />
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
      <Form className="form">
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
      <div>
        {Dropdown(["Undergraduate Research Experience", "Professional"])}
      </div>
      <div className="questions">{getQuestions()}</div>
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button
          content="Add Question"
          className="button"
          onClick={addQuestion}
        />
      </div>
      <div className="bottomButtons">
        {/* <Link to="/"> */}
        <Form.Button
          content="Publish Survey"
          className="button"
          onClick={publishSurvey}
        />
        {/* </Link> */}
        <Form.Button
          content="Save Survey"
          className="button"
          onClick={saveSurvey}
        />
      </div>
    </>
  );
};

export default CreateSurveyPage;
