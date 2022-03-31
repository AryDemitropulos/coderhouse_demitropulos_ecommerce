import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import { getItems } from "../../services/itemsService";

const ItemListContainer = () => {
  const loadingProducts = [{}, {}, {}];
  const [products, setProducts] = useState(loadingProducts);

  const { category = null } = useParams();

  useEffect(() => {
    setProducts(loadingProducts);
    getItems(category)
      .then((res) => {
        console.log(res);
        setProducts(res.docs.map((p) => ({ ...p.data(), id: p.id })));
      })
      .catch((error) => {
        console.log("Error loading products", error);
      });
  }, [category]);

  return (
    <Box sx={{ width: "100%" }}>
      <ItemList products={products} selectedCategory={category} />
    </Box>
  );
};

export default ItemListContainer;
