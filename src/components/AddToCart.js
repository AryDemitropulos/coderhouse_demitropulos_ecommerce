import { Button } from "@mui/material";
import React from "react";

const AddToCart = ({ onAdd }) => {
  return (
    <Button variant="contained" onClick={onAdd}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
