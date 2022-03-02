import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";
import ItemCount from "./ItemCount";

const Item = (props) => {
  const product = props.product || {};
  const { name, img, description, stock, price } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      {img ? (
        <CardMedia component="img" alt={name} height="140" image={img} />
      ) : (
        <Skeleton variant="rectangular" height={140} />
      )}

      <CardContent>
        {name ? (
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
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
      </CardContent>
      <CardActions>
        <ItemCount />
      </CardActions>
    </Card>
  );
};

export default Item;
