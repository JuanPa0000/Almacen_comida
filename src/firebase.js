// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxhwofTEwUVhFN2iYe92DASmzSa2kzY8g",
  authDomain: "almacen-app-62a35.firebaseapp.com",
  projectId: "almacen-app-62a35",
  storageBucket: "almacen-app-62a35.firebasestorage.app",
  messagingSenderId: "812881730575",
  appId: "1:812881730575:web:3232f07bde6423494e577a",
  measurementId: "G-W0NVYRP7YQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
