import React, { useState, useEffect } from "react";
import "./questionCard.css";
import { Form } from "semantic-ui-react";

const LongAnswerBody = ({ cardData, setCardData }) => {
  const handleChange = (e, { name, value }) =>
    setCardData({ ...cardData, [name]: value });

  return (
    <>
      <div className="middle">
        <Form>
          <Form.Input
            className="prompt"
            placeholder="Long Answer Here"
            name="answer"
            value={cardData.LongAnswer}
            onChange={handleChange}
            style={{ height: "100px" }}
            required
          />
        </Form>
      </div>
    </>
  );
};

export default LongAnswerBody;
