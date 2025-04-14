
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqaj0NchcW4-3NZKsvDaeHxHNWZPhWC_U",
  authDomain: "indihome-1d33e.firebaseapp.com",
  databaseURL: "https://indihome-1d33e-default-rtdb.firebaseio.com",
  projectId: "indihome-1d33e",
  storageBucket: "indihome-1d33e.firebasestorage.app",
  messagingSenderId: "231717408975",
  appId: "1:231717408975:web:49ec8bc68f7f327cb527ba",
  measurementId: "G-HWT1KLSKE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);