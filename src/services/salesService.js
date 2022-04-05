import { collection, addDoc } from "firebase/firestore";
import { dbFirebase } from "../firebase/config";

const collectionName = "sales";

export const newSale = (sale) => {
  return addDoc(collection(dbFirebase, collectionName), sale);
};
