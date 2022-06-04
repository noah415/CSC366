import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/navBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionCard from "./pages/CreateSurvey/questionCard";
import ProfileTypePage from "./pages/ProfileType/createProfileType";
import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([{ test: "remove" }]);
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            {/* CHANGE ELEMENT AS IMPLEMENTED */}
            <Route exact path="/" element={<Navbar />} />
            <Route exact path="/surveys" element={<Navbar />} />
            <Route path="/profiles" element={<Navbar />} />
            <Route path="/users" element={<Navbar />} />
            <Route path="/login" element={<Navbar />} />
            <Route path="/results" element={<Navbar />} />
            <Route path="/account" element={<Navbar />} />
            <Route
              path="/createSurvey"
              element={
                <QuestionCard
                  surveyId="1"
                  qNumber="1"
                  questions={questions}
                  setQuestions={setQuestions}
                />
              }
            />
            <Route path="/createProfileType" element={<ProfileTypePage />} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
