import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RaceRegister from "./pages/RegisterRace";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { AuthContextProvider } from "./contexts/Auth";
function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='/cadastro-corrida' element={<RaceRegister />} />
            <Route path={`/:username`} element={<Profile />} />
            <Route path={`/login`} element={<Login />} />
          </Routes>
        </AuthContextProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
