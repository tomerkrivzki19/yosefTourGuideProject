import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {/* <Route path="*" element={<ErroePage />} />
          <Route path="/500" element={<ServerErrorPage />} /> */}

          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
