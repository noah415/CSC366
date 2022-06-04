import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import "./questionCard.css";
import profileChar from "../ProfileType/profileType";
import Toggle from "react-toggle";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

const QuestionCard = ({ surveyId, qNumber, questions, setQuestions }) => {
  const [cardData, setCardData] = useState({
    sId: surveyId,
    position: qNumber,
    required: false,
  });
  const handleChange = (e, { name, value }) =>
    setCardData({ ...cardData, [name]: value });

  useEffect(() => {
    console.log(cardData);
    console.log(questions);
    setQuestions(
      questions.concat([cardData]) //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
    );
    setQuestions(
      questions.splice(questions.length - 2) //.sort((a, b) => a.name.toLowerCase() - b.name.toLowerCase())
    );
  }, [cardData]);

  const handleDelete = () => {
    console.log("Delete Question");
  };

  const DropdownQ = (options) => {
    return (
      <select
        className="qTypeDrop"
        name="questionType"
        value={cardData.questionType}
        onChange={handleChange}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  };

  const DropdownVC = (options, dType) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
      <select
        className="qTypeDrop"
        name="valueCharachteristic"
        value={cardData.valueCharachteristic}
        onChange={handleChange}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  };

  const questionOptions = ["Scale", "Short Answer", "Long Answer"];
  const profileTypeOptions = ["No Characteristic Selected"].concat(
    profileChar.map((a) => a.name)
  );
  const scaleValues = [
    "0. No Answer",
    "1: Strongly Disagree",
    "2: Disagree",
    "3: Somewhat Disagree",
    "4: Neither Agree nor Disagree",
    "5: Somewhat Agree",
    "6: Agree",
    "7: Strongly Agree",
  ];

  return (
    <>
      <Navbar />
      <div className="card">
        <div className="topRow">
          <form>
            <input
              className="prompt"
              placeholder="Question"
              name="promt"
              value={cardData.prompt}
              onChange={handleChange}
              required
            />
          </form>
          {DropdownQ(questionOptions)}
        </div>
        <div className="middle">
          <h1 className="ResponseOptions">Scale Response Options</h1>
          <div className="scaleValues">
            {scaleValues.map((value) => {
              return <h2 className="scaleOption">{value}</h2>;
            })}
          </div>
        </div>
        <div className="bottomRow">
          <div className="profileOptions">{DropdownVC(profileTypeOptions)}</div>
          <label className="toggleArea">
            <span className="toggleLabel">Required?</span>
            <Toggle
              icons={false}
              className="toggle"
              defaultChecked={false}
              onChange={handleChange}
            />
          </label>
          <IconButton
            style={{ color: "#5480D4", paddingTop: "7%", fontSize: "3em" }}
            onClick={() => handleDelete()}
          >
            <DeleteIcon style={{ fontSize: ".75em" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
