import React from "react";
import { Box, Container, Divider } from "@mui/material";
import ItemListContainer from "./ItemListContainer.js";
import LandingLogo from "./LandingLogo.js";
import ItemDetailContainer from "./ItemDetailContainer.js";

function Main() {
  const greeting = "Bienvenidos a la página de E-Commerce";
  return (
    <>
      <Container maxWidth="lg" className="main-container">
        <Box className="d-flex-col-center">
          <LandingLogo />
          <ItemListContainer greeting={greeting} />
        </Box>
      </Container>
      <Container maxWidth="lg" className="main-container">
        <Box className="d-flex-col-center">
          <ItemDetailContainer />
        </Box>
      </Container>
    </>
  );
}

export default Main;
