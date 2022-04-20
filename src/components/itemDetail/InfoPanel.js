import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, CardContent, Typography } from "@mui/material";

import ItemCount from "../ItemCount";
import AddToCart from "../AddToCart";
import { successNotification } from "../../services/notificationService";
import { context } from "../../context/CartContext";
import Conditional from "../Conditional";

const InfoPanel = ({ item }) => {
  const { name, price = 0, description, stock } = item;
  const [addedToCart, setAddedToCart] = useState(false);
  const [itemsCount, setItemCount] = useState(0);
  const [initial, setInitial] = useState(1);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const { addItem, getQuantityOfProduct, updateCartProduct } =
    useContext(context);

  const onIncrement = (count) => {
    setItemCount(count);
  };

  const onAddToCart = () => {
    successNotification(`${itemsCount} items were added to cart`);
    addItem(item, itemsCount);
    setAddedToCart(true);
  };

  const getQuantity = () => {
    return getQuantityOfProduct(item.id);
  };

  const updateCart = () => {
    updateCartProduct(item, itemsCount);
  };

  useEffect(() => {
    setQuantityInCart(getQuantityOfProduct(item.id));
  }, [getQuantityOfProduct]);

  useEffect(() => {
    if (quantityInCart > 0) {
      setInitial(quantityInCart);
    } else {
      setInitial(1);
    }
  }, [quantityInCart]);

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
              <Conditional condition={getQuantity()}>
                <Typography
                  variant="body1"
                  color="warning.main"
                  component="div"
                >
                  You have a total of <strong>{getQuantity()}</strong> items in
                  your cart
                </Typography>
              </Conditional>

              <ItemCount
                stock={stock}
                initial={initial}
                min={getQuantity() ? 0 : 1}
                onIncrement={onIncrement}
                disabled={addedToCart}
              />
              <Conditional
                condition={getQuantity()}
                elseElement={<AddToCart onAdd={onAddToCart} />}
              >
                <Button
                  variant="contained"
                  onClick={updateCart}
                  color="warning"
                >
                  Update Cart
                </Button>
              </Conditional>
            </>
          )}
        </Box>
      </CardContent>
    </Box>
  );
};

export default InfoPanel;
