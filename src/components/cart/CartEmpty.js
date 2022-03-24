import { Button, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <Card sx={{ padding: "30px 15px" }} className="d-flex-center-sb">
      <Typography variant="h5">Cart empty... Go buy something!!!</Typography>
      <Link to="/">
        <Button variant="contained">Go home</Button>
      </Link>
    </Card>
  );
};

export default CartEmpty;
