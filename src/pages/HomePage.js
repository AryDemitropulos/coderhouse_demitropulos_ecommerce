import { Box } from "@mui/material";
import React from "react";
import Greeting from "../components/Greeting";
import ItemListContainer from "../components/itemList/ItemListContainer";
import LandingLogo from "../components/LandingLogo";

const HomePage = () => {
  const greeting = "Bienvenidos a la página de E-Commerce";

  return (
    <Box className="d-flex-col-center">
      <LandingLogo />
      <Box sx={{ width: "100%" }}>
        <Greeting greeting={greeting} />
        <ItemListContainer />
      </Box>
    </Box>
  );
};

export default HomePage;
