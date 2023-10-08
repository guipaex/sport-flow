import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RaceRegister from "./pages/RaceRegister";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthGoogleProvider } from "./contexts/authGoogle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <AuthGoogleProvider>
          <Routes>
            <Route Component={Home} path='/' />
            <Route Component={RaceRegister} path='/cadastro-corrida' />
            <Route Component={Login} path='/login' />
          </Routes>
        </AuthGoogleProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
