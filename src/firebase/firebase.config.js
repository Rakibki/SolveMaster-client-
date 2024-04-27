// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1TwErjMi9pDej8SFWQmatgNAXNacs0AI",
  authDomain: "solvemaster-aa20a.firebaseapp.com",
  projectId: "solvemaster-aa20a",
  storageBucket: "solvemaster-aa20a.appspot.com",
  messagingSenderId: "1019658440676",
  appId: "1:1019658440676:web:ce1b68d6ffd68c012dc1f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
