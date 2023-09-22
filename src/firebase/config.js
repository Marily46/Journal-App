import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwwu5VVKTBAnpQ28rQOp5M4Z_FCBXXok",
  authDomain: "react-dc052.firebaseapp.com",
  projectId: "react-dc052",
  storageBucket: "react-dc052.appspot.com",
  messagingSenderId: "872508494591",
  appId: "1:872508494591:web:72d68c20902eb6ea42b2ca",
  measurementId: "G-M3F4BYVFQZ"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
