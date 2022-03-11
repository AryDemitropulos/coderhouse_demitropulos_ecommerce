import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../services/itemsService";

const ItemDetailContainer = () => {
  const [itemSeleccionado, setItemSeleccionado] = useState();
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      setItemSeleccionado(data);
    });
  }, [id]);

  return <ItemDetail item={itemSeleccionado} />;
};

export default ItemDetailContainer;
