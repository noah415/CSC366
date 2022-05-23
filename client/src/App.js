import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/navBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Navbar />} />
            <Route exact path="/surveys" element={<Navbar />} />
            <Route path="/profiles" element={<Navbar />} />
            <Route path="/users" element={<Navbar />} />
            <Route path="/login" element={<Navbar />} />
            <Route path="/results" element={<Navbar />} />
            <Route path="/account" element={<Navbar />} />
            <Route path="/createSurvey" element={<Navbar />} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
