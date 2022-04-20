import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/navbar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles.css";
import CartContext from "./context/CartContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <CartContext>
          <NavBar />
          <Main />
          <Footer />
          <ToastContainer />
        </CartContext>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
