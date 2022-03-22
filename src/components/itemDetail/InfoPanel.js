import React, { useState } from "react";
import { Box, Button, CardContent, Typography } from "@mui/material";
import ItemCount from "../ItemCount";
import AddToCart from "../AddToCart";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InfoPanel = ({ item }) => {
  const { name, price = 0, description, stock } = item;
  const [addedToCart, setAddedToCart] = useState(false);
  const [itemsCount, setItemCount] = useState(0);

  const navigate = useNavigate();

  const onIncrement = (count) => {
    setItemCount(count);
  };

  const onAddToCart = () => {
    setAddedToCart(true);
    toast.success(`${itemsCount} items were added to cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
        <Box className="mt15">
          {addedToCart ? (
            <>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                A total of <strong>{itemsCount}</strong> items were added to
                cart
              </Typography>
              <Link to="/cart">
                <Button variant="outlined">Go to cart</Button>
              </Link>
            </>
          ) : (
            <>
              <ItemCount
                stock={stock}
                initial={1}
                onIncrement={onIncrement}
                disabled={addedToCart}
              />
              <AddToCart onAdd={onAddToCart} />
            </>
          )}
        </Box>
      </CardContent>
    </Box>
  );
};

export default InfoPanel;
