import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import Input from "../Input";
import { errorNotification } from "../../services/notificationService";

const LoginForm = ({ onSubmit }) => {
  const [emailInput, setEmailInput] = useState({});
  const [passwordInput, setPasswordInput] = useState({});
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(validate());
  }, [emailInput, passwordInput]);

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;

    const isValid = validatePassword(newPassword);
    const newValue = {
      value: newPassword,
      error: !isValid,
      errorMessage: isValid ? null : "Password is required",
    };
    setPasswordInput(newValue);
  };
  const handleChangeEmail = (event) => {
    const newMail = event.target.value;
    const isValid = validateEmail(newMail);
    const newValue = {
      value: newMail,
      error: !isValid,
      errorMessage: isValid ? null : "Invalid email",
    };

    setEmailInput(newValue);
  };

  const validateEmail = (mail = emailInput?.value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && mail?.length > 0;
  };

  const validatePassword = (password = passwordInput?.value) => {
    return password?.length > 0;
  };

  const validate = () => {
    return validateEmail() && validatePassword();
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(emailInput.value, passwordInput.value);
    } else {
      errorNotification("Invalid email or password");
    }
  };

  return (
    <Box sx={{ p: 3 }} omponent="form">
      <Input
        label="Mail"
        onChange={handleChangeEmail}
        error={emailInput.error}
        helper={emailInput.errorMessage}
      ></Input>
      <Input
        label="Password"
        onChange={handleChangePassword}
        error={passwordInput.error}
        helper={passwordInput.errorMessage}
      ></Input>

      <Box sx={{ p: 3 }} className=" w100 d-flex-center">
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!formValid}
          type="submit"
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
