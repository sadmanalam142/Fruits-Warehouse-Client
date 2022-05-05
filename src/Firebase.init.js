// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuMD6TnIDw8nORQDn7Wcco5MIIB9EHOt4",
  authDomain: "fruits-warehouse-83425.firebaseapp.com",
  projectId: "fruits-warehouse-83425",
  storageBucket: "fruits-warehouse-83425.appspot.com",
  messagingSenderId: "652050981612",
  appId: "1:652050981612:web:2dc3eb00833ef46e31bbc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;