import React, { useState, useEffect } from "react";
import "./questionCard.css";

const ScaleBody = () => {
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
      <div className="middle">
        <h1 className="ResponseOptions">Scale Response Options</h1>
        <div className="scaleValues">
          {scaleValues.map((value) => {
            return <h2 className="scaleOption">{value}</h2>;
          })}
        </div>
      </div>
    </>
  );
};

export default ScaleBody;
