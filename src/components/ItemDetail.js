import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
} from "@mui/material";
import React from "react";
import Image from "./itemDetail/Image";
import InfoPanel from "./itemDetail/InfoPanel";

const ItemDetail = ({ item = {} }) => {
  const { name, img, id } = item;

  return (
    <>
      {id ? (
        <Card className="w100">
          <Box sx={{ display: "flex" }}>
            <Image img={img} alt={name} />
            <InfoPanel item={item} />
          </Box>
        </Card>
      ) : (
        <Skeleton className="w100" height={400} />
      )}
    </>
  );
};
export default ItemDetail;
