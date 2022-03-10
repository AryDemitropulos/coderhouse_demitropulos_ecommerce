import React, { useState } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ItemCount = ({ stock = 0, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < stock) setCount(count + 1);
  };
  const onRemove = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <Box className="d-flex-center-sb w100">
      <Typography variant="h5">Stock: {stock}</Typography>
      <Box className="d-flex-center-sb">
        <IconButton
          color="secondary"
          aria-label="remove an item"
          disabled={count <= 0}
          onClick={onRemove}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography variant="h5" color="initial">
          {count}
        </Typography>
        <IconButton
          color="secondary"
          aria-label="add an item"
          onClick={onAdd}
          disabled={count >= stock}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ItemCount;
