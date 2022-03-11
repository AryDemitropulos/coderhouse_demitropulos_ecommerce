import React from "react";

import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Image from "./Image";
import Detail from "./Detail";
import CategoriesList from "./CategoriesList";

const Item = ({ product = {}, selectedCategory = "" }) => {
  const { id, name, img, description, categories = [], price } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image img={img} name={name} id={id} />
      <CardContent>
        <Detail id={id} name={name} price={price} description={description} />
        <CategoriesList
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </CardContent>
    </Card>
  );
};

export default Item;
