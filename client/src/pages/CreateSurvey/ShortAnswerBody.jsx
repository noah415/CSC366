import React, { useState, useEffect } from "react";
import "./questionCard.css";
import { Form } from "semantic-ui-react";

const ShortAnswerBody = ({ cardData, setCardData }) => {
  const handleChange = (e, { name, value }) =>
    setCardData({ ...cardData, [name]: value });

  return (
    <>
      <div className="middle">
        <Form>
          <Form.Input
            className="prompt"
            placeholder="Short Answer Here"
            name="answer"
            value={cardData.shortAnswer}
            onChange={handleChange}
            required
          />
        </Form>
      </div>
    </>
  );
};

export default ShortAnswerBody;
