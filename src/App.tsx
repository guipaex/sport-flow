import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RaceRegister from "./pages/RaceRegister";
import RacesView from "./components/RacesView";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={RacesView} path='/' />
        <Route Component={RaceRegister} path='/addrace' />
      </Routes>
    </Router>
  );
}

export default App;
