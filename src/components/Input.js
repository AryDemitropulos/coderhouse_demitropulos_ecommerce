import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, error, helper, onChange }) => {
  const err = Boolean(error);

  const handleChange = (event) => {
    onChange && onChange(event);
  };

  return (
    <>
      <TextField
        label={label}
        variant="standard"
        fullWidth
        error={err}
        margin="dense"
        helperText={helper}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
