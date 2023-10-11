import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthGoogleProvider } from "./contexts/authGoogle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RaceRegister from "./pages/RegisterRace";

function App() {
  return (
    <>
      <Router>
        <AuthGoogleProvider>
          <Header />
          <Routes>
            <Route Component={Home} path='/' />
            <Route Component={RaceRegister} path='/cadastro-corrida' />
          </Routes>
        </AuthGoogleProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
