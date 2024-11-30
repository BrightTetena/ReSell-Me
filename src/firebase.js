// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY2PYXP1VF1RrAKj1d3g4OPgJPw0jQxVw",
  authDomain: "resell-me-ac5bb.firebaseapp.com",
  projectId: "resell-me-ac5bb",
  storageBucket: "resell-me-ac5bb.appspot.com",
  messagingSenderId: "941287762205",
  appId: "1:941287762205:web:8b15d2501e6a73b6f159f4",
  measurementId: "G-NCLRXW0K90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);