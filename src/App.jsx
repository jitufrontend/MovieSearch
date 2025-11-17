import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <>
      <Router basename="/MovieSearch">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
