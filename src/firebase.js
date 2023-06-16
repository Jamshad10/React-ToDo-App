// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoEyt_6xrm6FB0TDgxfbJlZ03kpKRifgU",
  authDomain: "todo-list-ad2b7.firebaseapp.com",
  projectId: "todo-list-ad2b7",
  storageBucket: "todo-list-ad2b7.appspot.com",
  messagingSenderId: "839480432376",
  appId: "1:839480432376:web:eaa0e09bd9f906f5afcd0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
