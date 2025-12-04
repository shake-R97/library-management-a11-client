// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfX-Uy0il5QYdrrJ_KVe-mmbJleV-9J5Y",
  authDomain: "book-archive-webapp.firebaseapp.com",
  projectId: "book-archive-webapp",
  storageBucket: "book-archive-webapp.firebasestorage.app",
  messagingSenderId: "154799186612",
  appId: "1:154799186612:web:20278b5e4bfcda8dba6de1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);