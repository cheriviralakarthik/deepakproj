// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAXvC_I9Llmg1BQerWTF4wRAMhsTlrL_c",
  authDomain: "cognida-62ac3.firebaseapp.com",
  databaseURL: "https://cognida-62ac3-default-rtdb.firebaseio.com",
  projectId: "cognida-62ac3",
  storageBucket: "cognida-62ac3.appspot.com",
  messagingSenderId: "510752622274",
  appId: "1:510752622274:web:192c70b36efc8cbb701d5b",
  measurementId: "G-470VWCHWWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
