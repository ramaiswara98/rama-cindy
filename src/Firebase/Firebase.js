// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAabNadMbNBAAOQRbwEz9VBB_inJpN_fOU",
  authDomain: "rama-cindy.firebaseapp.com",
  projectId: "rama-cindy",
  storageBucket: "rama-cindy.appspot.com",
  messagingSenderId: "984859991317",
  appId: "1:984859991317:web:a22aa6181b26ba339d5d1c",
  measurementId: "G-82NZZ33LKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, analytics, db}
