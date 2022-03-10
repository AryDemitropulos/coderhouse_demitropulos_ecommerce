import React from "react";
import { Box, CardContent, Typography } from "@mui/material";
import AddToCart from "../AddToCart";
import Stats from "./Stats";
import ItemCount from "../ItemCount";

const InfoPanel = ({ item }) => {
  const { name, price = 0, description, stock, stats } = item;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h3">
          {name}
        </Typography>
        <Typography component="div" variant="h4">
          ${price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {description}
        </Typography>
        <ItemCount stock={stock} />
      </CardContent>
    </Box>
  );
};

export default InfoPanel;
