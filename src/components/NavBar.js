import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CartWidget from "./CartWidget";
import UserButton from "./UserButton";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            E-Commerce
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Productos
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Ofertas
            </Button>
          </Box>
          <Box>
            <CartWidget />
            <UserButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
