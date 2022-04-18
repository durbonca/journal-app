// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBLs9XGDIb271tO116R7daHFXWPoWWbous",
  authDomain: "journal-app-4643c.firebaseapp.com",
  projectId: "journal-app-4643c",
  storageBucket: "journal-app-4643c.appspot.com",
  messagingSenderId: "1093747368205",
  appId: "1:1093747368205:web:2584756287784d7b0d1044"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };