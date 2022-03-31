// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXrw2Vv7WAOzNNphaR4u-JMIejnQrCnQA",
  authDomain: "coderecommerce-d9935.firebaseapp.com",
  projectId: "coderecommerce-d9935",
  storageBucket: "coderecommerce-d9935.appspot.com",
  messagingSenderId: "689214528268",
  appId: "1:689214528268:web:e34c31a0d2dc90ef0c0729",
  measurementId: "G-54Z9XWF3X4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app);
