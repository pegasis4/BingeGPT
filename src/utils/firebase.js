// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXoEVYRiDxfcvxzwviWG48rI7rFOJ7RM",
  authDomain: "netflixgpt-8e7b7.firebaseapp.com",
  projectId: "netflixgpt-8e7b7",
  storageBucket: "netflixgpt-8e7b7.appspot.com",
  messagingSenderId: "102919972077",
  appId: "1:102919972077:web:6869a9d2dd3b63491fd8e4",
  measurementId: "G-P130N94R96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();