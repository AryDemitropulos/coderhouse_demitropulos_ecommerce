import { Typography } from "@mui/material";
import React from "react";

const Greeting = ({ greeting }) => {
  return (
    <Typography
      variant="h6"
      gutterBottom
      color="initial"
      sx={{ textAlign: "center", paddingBottom: "40px", paddingTop: "40px" }}
    >
      {greeting}
    </Typography>
  );
};

export default Greeting;
