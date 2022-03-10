import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const itemDesdeApiMock = {
  id: "2",
  name: "Product 2",
  img: "https://media.istockphoto.com/photos/red-gumshoes-or-skate-shoes-picture-id1150711818?k=20&m=1150711818&s=612x612&w=0&h=2CKquoE3_2fzlM5NHiWEqXDZ96iwnYwp-W8K6lD61xM=",
  description:
    "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
  stock: 10,
};

const ItemDetailContainer = () => {
  const [itemSeleccionado, setItemSeleccionado] = useState();

  useEffect(() => {
    getItem().then((data) => {
      setItemSeleccionado(data);
    });
  });

  function getItem(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemDesdeApiMock);
      }, 2000);
    });
  }

  return <ItemDetail item={itemSeleccionado} />;
};

export default ItemDetailContainer;
