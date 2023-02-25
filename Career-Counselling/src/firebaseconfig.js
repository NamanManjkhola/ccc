// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDctfQPwhV8SMrLWccREIuopQOXNjcD0x4",
  authDomain: "c-counsell-auth.firebaseapp.com",
  projectId: "c-counsell-auth",
  storageBucket: "c-counsell-auth.appspot.com",
  messagingSenderId: "947116760066",
  appId: "1:947116760066:web:b162421e7109022671db1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};

