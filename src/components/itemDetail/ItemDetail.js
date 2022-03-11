import React from "react";
import { Box, Card, Skeleton } from "@mui/material";
import Image from "./Image";
import InfoPanel from "./InfoPanel";

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
