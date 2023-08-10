import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

/**
 * Base de datos:
 */
const firebaseConfig = {
  apiKey: "AIzaSyDDmD0uUJYXCDAlOiawpWtYgylfE-j-ebQ",
  authDomain: "denuncias-seac.firebaseapp.com",
  projectId: "denuncias-seac",
  storageBucket: "denuncias-seac.appspot.com",
  messagingSenderId: "836969377418",
  appId: "1:836969377418:web:a409ae364a940d63ad4773"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth, firebaseConfig };