import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CartWidget from "./CartWidget";
import UserButton from "./UserButton";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" noWrap component="div">
              E-Commerce
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <NavLink to="/category/category1">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Category 1
              </Button>
            </NavLink>
            <NavLink to="/category/category2">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Category 2
              </Button>
            </NavLink>
            <NavLink to="/category/category3">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Category 3
              </Button>
            </NavLink>
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
