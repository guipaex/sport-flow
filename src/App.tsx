import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RaceRegister from "./pages/RaceRegister";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Home} path='/' />
        <Route Component={RaceRegister} path='/addrace' />
        <Route Component={Login} path='/login' />
      </Routes>
    </Router>
  );
}

export default App;
