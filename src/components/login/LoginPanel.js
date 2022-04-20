import { useState } from "react";
import { Tabs, Tab, Box, TextField } from "@mui/material";
import Conditional from "../Conditional";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

const LoginPanel = ({ handleLogin, handleSignIn }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "300px" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="d-flex-center"
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Login" id="tab-1" />
          <Tab label="Sign In" id="tab-2" />
        </Tabs>
      </Box>
      <Conditional condition={value === 0}>
        <LoginForm onSubmit={handleLogin} />
      </Conditional>
      <Conditional condition={value === 1}>
        <SignInForm onSubmit={handleSignIn} />
      </Conditional>
    </Box>
  );
};

export default LoginPanel;
