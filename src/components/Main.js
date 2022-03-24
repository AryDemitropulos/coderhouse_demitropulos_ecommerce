import React from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ItemDetailPage from "../pages/ItemDetailPage";
import ItemListContainer from "./itemList/ItemListContainer";

function Main() {
  return (
    <>
      <Container maxWidth="lg" className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="items/:id" element={<ItemDetailPage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default Main;
