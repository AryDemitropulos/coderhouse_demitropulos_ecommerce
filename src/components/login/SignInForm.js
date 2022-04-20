import { Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Input from "../Input";

const SignInForm = ({ onSubmit }) => {
  const [emailInput, setEmailInput] = useState({});
  const [email2Input, setEmail2Input] = useState({});
  const [nameInput, setNameInput] = useState({});
  const [lastnameInput, setLastnameInput] = useState({});
  const [passwordInput, setPasswordInput] = useState({});
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(validateForm());
  }, [emailInput, email2Input, nameInput, lastnameInput, passwordInput]);

  const handleSubmit = () => {
    const userData = {
      email: emailInput.value,
      name: nameInput.value,
      lastname: lastnameInput.value,
    };
    onSubmit(emailInput.value, passwordInput.value, userData);
  };

  const handleChangeName = (event) => {
    const value = event.target.value;
    const isValid = value.length > 0;
    const newValue = {
      value,
      error: !isValid,
      errorMessage: isValid ? null : "Name is required",
    };
    setNameInput(newValue);
  };
  const handleChangeLastname = (event) => {
    const value = event.target.value;
    const isValid = value.length > 0;
    const newValue = {
      value: value,
      error: !isValid,
      errorMessage: isValid ? null : "Lastname is required",
    };
    setLastnameInput(newValue);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    let error, errorMessage;

    if (value.length < 6) {
      error = true;
      errorMessage = "Password must be at least 6 characters long";
    }
    if (value.length === 0) {
      error = true;
      errorMessage = "Password is required";
    }

    setPasswordInput({ value, error, errorMessage });
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    const isValid = validateEmail(value);
    const newValue = {
      value,
      error: !isValid,
      errorMessage: isValid ? null : "Invalid email",
    };
    setEmailInput(newValue);
  };

  const handleChangeEmail2 = (event) => {
    const value = event.target.value;
    let error = false;
    let errorMessage = null;
    if (value !== emailInput.value) {
      error = true;
      errorMessage = "Emails must match";
    }
    if (!validateEmail(value)) {
      error = true;
      errorMessage = "Invalid email";
    }
    if (value.length === 0) {
      error = true;
      errorMessage = "Email is required";
    }

    setEmail2Input({ value, error, errorMessage });
  };

  const validateEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && mail?.length > 0;
  };

  const validateForm = () => {
    return (
      validateEmail(emailInput.value) &&
      validateEmail(email2Input.value) &&
      passwordInput.value?.length >= 6 &&
      nameInput.value?.length > 0 &&
      lastnameInput.value?.length > 0 &&
      emailInput.value === email2Input.value
    );
  };
  return (
    <Box sx={{ p: 3 }}>
      <Input
        label="Name"
        onChange={handleChangeName}
        error={nameInput.error}
        helper={nameInput.errorMessage}
      ></Input>

      <Input
        label="Lastname"
        onChange={handleChangeLastname}
        error={lastnameInput.error}
        helper={lastnameInput.errorMessage}
      ></Input>
      <Input
        label="Mail"
        onChange={handleChangeEmail}
        error={emailInput.error}
        helper={emailInput.errorMessage}
      ></Input>

      {emailInput.value && validateEmail(emailInput.value) && (
        <Input
          label="Confirm mail"
          onChange={handleChangeEmail2}
          error={email2Input.error}
          helper={email2Input.errorMessage}
        ></Input>
      )}
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
        >
          Sing In
        </Button>
      </Box>
    </Box>
  );
};

export default SignInForm;
