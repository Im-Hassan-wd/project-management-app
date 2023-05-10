import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4pzBlKfjY6ShoApBLDI9lMD1oOCGgoHY",
  authDomain: "the-dojo-webite.firebaseapp.com",
  projectId: "the-dojo-webite",
  storageBucket: "the-dojo-webite.appspot.com",
  messagingSenderId: "708215139649",
  appId: "1:708215139649:web:7b638dddf986f7896345c0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init servces
export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();

/// timestamp
export const timestamp = firebase.firestore.Timestamp;
