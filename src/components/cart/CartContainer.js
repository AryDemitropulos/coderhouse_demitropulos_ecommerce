import { Box, Button, Typography, Card } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context/CartContext";
import Conditional from "../Conditional";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { newSale, getSale } from "../../services/salesService";
import { successNotification } from "../../services/notificationService";
import SaleInfoDialog from "./SaleInfoDialog";
import { authContext } from "../../context/AuthContext";

const CartContainer = () => {
  const { cart, getTotal, removeItem, cleanCart } = useContext(context);
  const { user, isLoggedIn, navigateToLoginAndRedirect } =
    useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [saleInfo, setSaleInfo] = useState();

  useEffect(() => {
    setOpenDialog(saleInfo !== undefined);
  }, [saleInfo]);

  const onFinishSale = () => {
    if (!isLoggedIn) {
      navigateToLoginAndRedirect("/cart");
      return;
    }
    setLoading(true);
    newSale({
      buyer: user,
      items: cart,
      date: new Date(),
      total: getTotal(),
    }).then(({ id }) => {
      successNotification("Sale added successfully! Purchase code: " + id);
      cleanCart();
      getSale(id).then((res) => {
        setLoading(false);
        setSaleInfo({ ...res.data(), id });
      });
    });
  };

  const handleClose = () => {
    setOpenDialog(false);
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
      {openDialog && <SaleInfoDialog onClose={handleClose} sale={saleInfo} />}
    </>
  );
};

export default CartContainer;
