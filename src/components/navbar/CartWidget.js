import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import { context } from "../../context/CartContext";
import { useContext } from "react";
import Conditional from "../Conditional";

const CartWidget = () => {
  const { getTotalItems } = useContext(context);
  return (
    <Conditional condition={getTotalItems()}>
      <Link to="/cart">
        <IconButton size="large" aria-label="show 4 cart" color="inherit">
          <Badge badgeContent={getTotalItems()} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </Conditional>
  );
};

export default CartWidget;
