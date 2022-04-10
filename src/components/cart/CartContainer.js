import { Box, Button, Typography, Card } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context/CartContext";
import Conditional from "../Conditional";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { newSale, getSale } from "../../services/salesService";
import { successNotification } from "../../services/notificationService";
import SaleInfoDialog from "./SaleInfoDialog";

const CartContainer = () => {
  const { cart, getTotal, removeItem, cleanCart } = useContext(context);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [saleInfo, setSaleInfo] = useState();

  useEffect(() => {
    setOpenDialog(saleInfo !== undefined);
    console.log("useEffect", saleInfo, openDialog);
  }, [saleInfo]);

  const onFinishSale = () => {
    setLoading(true);
    newSale({
      buyer: { name: "pepito", phone: "test", email: "test@test.com" },
      items: cart,
      date: new Date(),
      total: getTotal(),
    }).then(({ id }) => {
      successNotification("Sale added successfully! Purchase code: " + id);
      // cleanCart();
      getSale(id).then((res) => {
        setLoading(false);
        setSaleInfo({ ...res.data(), id });
        console.log("THEN del getSale", saleInfo, openDialog);
      });
    });
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  console.log("RAW", openDialog);

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
      {openDialog && <SaleInfoDialog onClose={handleClose} sale={saleInfo} />}
    </>
  );
};

export default CartContainer;
