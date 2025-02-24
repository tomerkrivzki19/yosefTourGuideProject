import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      {/* router  */}
      <Nav />
      <MainPage />
    </>
  );
}

export default App;
