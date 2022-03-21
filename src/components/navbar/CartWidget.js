import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <IconButton size="large" aria-label="show 4 cart" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
