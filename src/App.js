import NavBar from "./components/navbar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
