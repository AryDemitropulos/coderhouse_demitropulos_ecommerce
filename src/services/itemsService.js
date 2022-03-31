import {
  getDocs,
  query,
  collection,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { dbFirebase } from "../firebase/config";

const collectionName = "products";

function getAll() {
  return getDocs(collection(dbFirebase, collectionName));
}

function getByCategory(category = "") {
  const queryCategory = query(
    collection(dbFirebase, collectionName),
    where("category", "==", category)
  );
  return getDocs(queryCategory);
}

export function getItems(category) {
  return category ? getByCategory(category) : getAll();
}

export function getItem(id = "") {
  const docRef = doc(dbFirebase, collectionName, id);

  return getDoc(docRef);
}
