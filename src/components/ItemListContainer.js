import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Item from "./Item";
const ItemListContainer = (props) => {
  const { greeting } = props;
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        gutterBottom
        color="initial"
        sx={{ textAlign: "center", paddingBottom: "40px", paddingTop: "40px" }}
      >
        {greeting}
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
