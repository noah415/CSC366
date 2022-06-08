import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/NavBar/navBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CreateSurvey from "./pages/CreateSurvey/createSurvey";
import DashBoardPage from "./pages/Dashboard/dashboard";
import ProfileTypePage from "./pages/ProfileType/createProfileType";
import AllSurveys from "./pages/AllSurveys/allSurveys";


function App() {
  const [questions, setQuestions] = useState([{ test: "remove" }]);


  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            {/* CHANGE ELEMENT AS IMPLEMENTED */}
            <Route exact path="/" element={<DashBoardPage />} />
            <Route exact path="/surveys" element={<AllSurveys />} />
            <Route path="/profiles" element={<Navbar />} />
            <Route path="/users" element={<Navbar />} />
            <Route path="/login" element={<Navbar />} />
            <Route path="/results" element={<Navbar />} />
            <Route path="/account" element={<Navbar />} />
            <Route
              path="/createSurvey" element={<CreateSurvey />}
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
