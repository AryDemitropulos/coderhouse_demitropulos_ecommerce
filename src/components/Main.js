import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ItemListContainer from "./ItemListContainer.js";
import LandingLogo from "./LandingLogo.js";

function Main() {
  const greeting = "Bienvenidos a la página de E-Commerce";
  return (
    <Container maxWidth="lg" className="main-container">
      <Box className="d-flex-col-center">
        <LandingLogo />
        <ItemListContainer greeting={greeting} />
      </Box>
    </Container>
  );
}

export default Main;
