import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthGoogleProvider } from "./contexts/authGoogle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RaceRegister from "./pages/RegisterRace";
import { AuthGoogleContext } from "./contexts/authGoogle";
import Profile from "./pages/Profile";

function App() {
  const { signed, user } = useContext<any>(AuthGoogleContext);
  return (
    <>
      <Router>
        <AuthGoogleProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='/cadastro-corrida' element={<RaceRegister />} />
            <Route path='/perfil/:uid' element={<Profile />} />
          </Routes>
        </AuthGoogleProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
