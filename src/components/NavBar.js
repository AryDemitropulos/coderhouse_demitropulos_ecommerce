import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CartButton from "./CartButton";
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
          <Box>
            <CartButton />
            <UserButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
