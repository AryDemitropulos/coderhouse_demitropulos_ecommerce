import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
} from "@mui/material";

const SaleInfoDialog = ({ sale = {}, onClose = () => {} }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Order generated succefully!
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">Sale code: {sale.id}</Typography>
        <Typography variant="subtitle1">
          Buyer: {sale.buyer.name + " " + sale.buyer.lastname}
        </Typography>
        <Typography variant="subtitle1">Email: {sale.buyer.email}</Typography>
        {sale.items.map((item, index) => (
          <Box className="d-flex-center-sb mt15" key="index">
            <Typography variant="body1" color="text.secondary">
              {item.product.name} x {item.quantity}
            </Typography>
            <Typography variant="body1">$ {item.total}</Typography>
          </Box>
        ))}
        <hr className=" mt15" />
        <Box className=" mt15">
          <Typography variant="h6" className="text-align-right">
            Total: ${sale.total}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaleInfoDialog;
