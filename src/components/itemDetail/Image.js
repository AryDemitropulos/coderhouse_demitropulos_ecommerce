import { CardMedia, Skeleton } from "@mui/material";

import React from "react";

const Image = ({ img, width = 700, alt = "Product image" }) => {
  return (
    <>
      {img ? (
        <CardMedia component="img" image={img} alt={alt} />
      ) : (
        <Skeleton variant="rectangular" width={width} height={600} />
      )}
    </>
  );
};

export default Image;
