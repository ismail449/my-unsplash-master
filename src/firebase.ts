// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { apiKey } from "./apiKey";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "my-unsplash-12de0.firebaseapp.com",
  projectId: "my-unsplash-12de0",
  storageBucket: "my-unsplash-12de0.appspot.com",
  messagingSenderId: "715032956789",
  appId: "1:715032956789:web:f7c38cdfb539424f794d3c",
  measurementId: "G-PKKNR3CD8X"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);


