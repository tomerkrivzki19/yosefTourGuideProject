import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Store from "./components/Store";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";

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
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
