import { useState, useContext } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Menu, MenuItem } from "@mui/material";
import { authContext } from "../../context/AuthContext";

const UserButton = ({ userName = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const context = useContext(authContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    context.logout();
  };
  return (
    <>
      <Button
        startIcon={<AccountCircle />}
        sx={{ color: "white", marginLeft: "15px" }}
        onClick={handleClick}
      >
        {userName.split(" ")[0]}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserButton;
