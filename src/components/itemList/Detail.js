import React from "react";

import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import ConditionalLink from "../ConditionalLink";

const Detail = ({ id, name, price, description }) => {
  return (
    <ConditionalLink to={"/items/" + id} condition={id}>
      {name ? (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
        </Box>
      ) : (
        <Skeleton variant="text" />
      )}
      {description ? (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      ) : (
        <Skeleton variant="text" />
      )}
    </ConditionalLink>
  );
};

export default Detail;
