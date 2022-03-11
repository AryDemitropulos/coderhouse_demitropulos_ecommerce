import { Grid, Typography } from "@mui/material";
import Conditional from "../Conditional";
import Item from "./Item";

const ItemList = ({ products, selectedCategory }) => {
  return (
    <>
      <Conditional condition={selectedCategory}>
        <Typography variant="h5" gutterBottom>
          Category: {selectedCategory}
        </Typography>
      </Conditional>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item product={product} selectedCategory={selectedCategory} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ItemList;
