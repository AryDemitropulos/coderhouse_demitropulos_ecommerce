import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { ItemList } from "./ItemList";
import Greeting from "./Greeting";

const productsMock = [
  {
    name: "Product 1",
    img: "https://media.istockphoto.com/photos/stylish-and-cool-boot-picture-id1276624783?k=20&m=1276624783&s=612x612&w=0&h=g9KHqQ6115Zh9VTgi5hyUDeD7zEA2p6zrdJHL5Y5UQM=",
    description:
      "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
    stock: 15,
  },
  {
    name: "Product 2",
    img: "https://media.istockphoto.com/photos/red-gumshoes-or-skate-shoes-picture-id1150711818?k=20&m=1150711818&s=612x612&w=0&h=2CKquoE3_2fzlM5NHiWEqXDZ96iwnYwp-W8K6lD61xM=",
    description:
      "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
    stock: 10,
  },
  {
    name: "Product 3",
    img: "https://media.istockphoto.com/photos/nike-air-jordan-picture-id472046671?k=20&m=472046671&s=612x612&w=0&h=cY-Xpnd2rvAR1rJ8V2aIKKssjKa5Ban47xJ_nxrzQgE=",
    description:
      "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
    stock: 23,
  },
];

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [products, setProducts] = useState([{}, {}, {}]);

  useEffect(() => {
    const promise = new Promise((success, error) => {
      setTimeout(() => success(productsMock), 2000);
    }).then((data) => {
      setProducts(data);
    });
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Greeting greeting={greeting} />
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
