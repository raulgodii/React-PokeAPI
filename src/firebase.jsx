// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC-y0F1pgw_6MzwJ0NlXb2Yrs4-iby1kDg",
    authDomain: "poke-api-76163.firebaseapp.com",
    projectId: "poke-api-76163",
    storageBucket: "poke-api-76163.appspot.com",
    messagingSenderId: "157515449891",
    appId: "1:157515449891:web:629db8e3598a923155d396"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
