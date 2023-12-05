// import { FirebaseApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import firebase form 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxR74_ywEYKleRPG_at9Hv2vdX27Ep4iE",
  authDomain: "insta-app-bcbee.firebaseapp.com",
  projectId: "insta-app-bcbee",
  storageBucket: "insta-app-bcbee.appspot.com",
  messagingSenderId: "93562111762",
  appId: "1:93562111762:web:b73fc007b8419fa79a55cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();