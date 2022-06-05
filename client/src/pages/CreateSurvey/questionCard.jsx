import Navbar from "../../components/NavBar/navBar";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import "./questionCard.css";
import profileChar from "../ProfileType/profileType";
import Toggle from "react-toggle";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import ScaleBody from "./ScaleBody";
import ShortAnswerBody from "./ShortAnswerBody";
import LongAnswerBody from "./LongAnswerBody";

const QuestionCard = ({ surveyId, qNumber, questions, setQuestions }) => {
  const [cardData, setCardData] = useState({
    sId: surveyId,
    position: qNumber,
    required: false,
    questionType: "Scale",
  });

  const [inserted, setInserted] = useState(false);

  const handleChangeForm = (e, { name, value }) => {
    setCardData({ ...cardData, [name]: value });
  };

  const getMiddle = () => {
    if (cardData.questionType === "Scale") {
      return <ScaleBody />;
    }

    if (cardData.questionType === "Short Answer") {
      return <ShortAnswerBody cardData={cardData} setCardData={setCardData} />;
    }

    if (cardData.questionType === "Long Answer") {
      return <LongAnswerBody cardData={cardData} setCardData={setCardData} />;
    }
  };

  const handleChangeDropQ = (test) =>
    setCardData({ ...cardData, questionType: test.target.value });

  const handleChangeDropVC = (test) =>
    setCardData({ ...cardData, valueCharacteristic: test.target.value });

  const handleChangeToggle = (test) => {
    setCardData({ ...cardData, required: test.target.checked });
    console.log(cardData);
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

  const DropdownVC = (options, dType) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
      <select
        className="qTypeDrop"
        name="valueCharacteristic"
        value={cardData.valueCharacteristic}
        onChange={handleChangeDropVC}
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

  return (
    <>
      <Navbar />
      <div className="card">
        <div className="topRow">
          <Form>
            <Form.Input
              className="prompt"
              placeholder="Question"
              name="prompt"
              value={cardData.prompt}
              onChange={handleChangeForm}
              required
            />
          </Form>
          {DropdownQ(questionOptions)}
        </div>
        <div className="middle">{getMiddle()}</div>
        <div className="bottomRow">
          <div className="profileOptions">{DropdownVC(profileTypeOptions)}</div>
          <label className="toggleArea">
            <span className="toggleLabel">Required?</span>
            <Toggle
              icons={false}
              className="toggle"
              defaultChecked={false}
              onChange={handleChangeToggle}
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
