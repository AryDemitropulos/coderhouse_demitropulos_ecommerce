import { Grid } from "@mui/material";
import Item from "./Item";

export const ItemList = (props) => {
  const { products } = props;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.map((product, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
