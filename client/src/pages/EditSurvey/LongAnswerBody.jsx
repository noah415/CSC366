import React, { useState, useEffect } from "react";
import "./questionCard.css";
import { Form } from "semantic-ui-react";

const LongAnswerBody = ({ cardData, setCardData }) => {
  const handleChange = (e, { name, value }) =>
    setCardData({ ...cardData, [name]: value });

  return (
    <>
      <div className="middle">
        <div className="middle">
          <p style={{ height: "100px" }}>Long Answer Here</p>
        </div>
      </div>
    </>
  );
};

export default LongAnswerBody;
