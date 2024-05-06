// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCoDaE9Ydh3kBHd6d5YgA86pRQj4_n9xS4",
  authDomain: "listacompras-8fd5d.firebaseapp.com",
  databaseURL: "https://listacompras-8fd5d-default-rtdb.firebaseio.com/",
  projectId: "listacompras-8fd5d",
  storageBucket: "listacompras-8fd5d.appspot.com",
  messagingSenderId: "315243807699",
  appId: "1:315243807699:web:d4703b94095e334d94a526",
  measurementId: "G-NQ7YXYX6VK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);