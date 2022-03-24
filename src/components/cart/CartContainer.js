import { Box, Button, Typography, Card } from "@mui/material";
import { useContext } from "react";
import { context } from "../../context/CartContext";
import Conditional from "../Conditional";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";

const CartContainer = () => {
  const { cart, getTotal, removeItem, cleanCart } = useContext(context);

  return (
    <>
      <Conditional condition={cart.length} elseElement={<CartEmpty />}>
        <Card className="w100 px15 py30">
          <CartTable cart={cart} removeItem={removeItem} />
          <Box className="mt15 d-flex-center-sb py30 px15">
            <Button variant="outlined" onClick={cleanCart}>
              Clean cart
            </Button>
            <Typography variant="h5">TOTAL: ${getTotal()}</Typography>
          </Box>
        </Card>
      </Conditional>
    </>
  );
};

export default CartContainer;
