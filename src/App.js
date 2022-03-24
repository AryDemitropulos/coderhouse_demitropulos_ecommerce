import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/navbar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "./context/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
