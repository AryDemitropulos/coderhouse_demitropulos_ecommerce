import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { dbFirebase } from "../firebase/config";

const collectionName = "sales";

export const newSale = (sale) => {
  return addDoc(collection(dbFirebase, collectionName), sale);
};

export const getSale = (saleId) => {
  const docRef = doc(dbFirebase, collectionName, saleId);
  return getDoc(docRef);
};
