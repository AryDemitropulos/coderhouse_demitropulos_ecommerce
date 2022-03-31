import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../services/itemsService";

const ItemDetailContainer = () => {
  const [itemSeleccionado, setItemSeleccionado] = useState();
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((res) => {
      setItemSeleccionado({ ...res.data(), id: res.id });
    });
  }, [id]);

  return <ItemDetail item={itemSeleccionado} />;
};

export default ItemDetailContainer;
