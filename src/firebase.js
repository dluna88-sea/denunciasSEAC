import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

/**
 * Base de datos de pruebas:
 */
const firebaseConfig = {
  apiKey: "AIzaSyDY3upm3nITv0PBwouNY3jcskjcvt1wYIo",
  authDomain: "testvue3fs.firebaseapp.com",
  projectId: "testvue3fs",
  storageBucket: "testvue3fs.appspot.com",
  messagingSenderId: "977270454385",
  appId: "1:977270454385:web:55b2ea8f0be002413d83d0"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth, firebaseConfig };