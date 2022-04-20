import { setDoc, getDoc, doc } from "firebase/firestore";
import { dbFirebase } from "../firebase/config";

const collectionName = "users";

export const newUser = (user) => {
  return setDoc(doc(dbFirebase, collectionName, user.id), user);
};

export const getUser = (userID) => {
  const docRef = doc(dbFirebase, collectionName, userID);
  return getDoc(docRef);
};
