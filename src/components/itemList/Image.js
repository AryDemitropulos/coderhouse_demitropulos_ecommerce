import { CardMedia, Skeleton } from "@mui/material";
import React from "react";
import ConditionalLink from "../ConditionalLink";

const Image = ({ img, id, name }) => {
  return (
    <ConditionalLink to={"/items/" + id} condition={id}>
      {img ? (
        <CardMedia component="img" alt={name} height="230" image={img} />
      ) : (
        <Skeleton variant="rectangular" height={230} />
      )}
    </ConditionalLink>
  );
};

export default Image;
