import { Box, Button, Typography, Card } from "@mui/material";
import { useContext, useState } from "react";
import { context } from "../../context/CartContext";
import Conditional from "../Conditional";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { newSale } from "../../services/salesService";
import { successNotification } from "../../services/notificationService";

const CartContainer = () => {
  const { cart, getTotal, removeItem, cleanCart } = useContext(context);
  const [loading, setLoading] = useState(false);

  const onFinishSale = () => {
    setLoading(true);
    newSale({
      buyer: { name: "pepito", phone: "test", email: "test@test.com" },
      items: cart,
      date: new Date(),
      total: getTotal(),
    }).then(({ id }) => {
      successNotification("Sale added successfully! Purchase code: " + id);
      cleanCart();
      setLoading(false);
    });
  };
  return (
    <>
      <Conditional condition={cart.length} elseElement={<CartEmpty />}>
        <Card className="w100 px15 py30">
          <CartTable cart={cart} removeItem={removeItem} />
          <Box className="mt15 d-flex-center-sb py30 px15">
            <Button variant="outlined" onClick={cleanCart}>
              Clean cart
            </Button>
            <Box>
              <Typography variant="h5">TOTAL: ${getTotal()}</Typography>
              <Button
                variant="contained"
                onClick={onFinishSale}
                disabled={loading}
              >
                Finish
              </Button>
            </Box>
          </Box>
        </Card>
      </Conditional>
    </>
  );
};

export default CartContainer;
