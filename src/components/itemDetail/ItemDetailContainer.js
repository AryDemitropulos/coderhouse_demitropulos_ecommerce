import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItem } from "../../services/itemsService";
import { errorNotification } from "../../services/notificationService";
import { Typography } from "@mui/material";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getItem(id)
      .then((res) => {
        setSelectedItem({ ...res.data(), id: res.id });
      })
      .catch((error) => {
        errorNotification("Error trying to get item");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        <ItemDetail item={selectedItem} />
      )}
    </>
  );
};

export default ItemDetailContainer;
