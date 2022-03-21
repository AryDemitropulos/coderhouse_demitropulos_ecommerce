import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/navbar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
