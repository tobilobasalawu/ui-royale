// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVbyarsLs0oHVVb-uuhVDzUlXWIfMqXas",
  authDomain: "ui-royale.firebaseapp.com",
  projectId: "ui-royale",
  storageBucket: "ui-royale.firebasestorage.app",
  messagingSenderId: "910048060682",
  appId: "1:910048060682:web:8436ec5a3d262fd29c86f3",
  measurementId: "G-ZP4H3GVYEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);