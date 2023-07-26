// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNlr-wDCQZ54wi1Ud3giyit9mwJToyYWE",
  authDomain: "reactlogin-53200.firebaseapp.com",
  projectId: "reactlogin-53200",
  storageBucket: "reactlogin-53200.appspot.com",
  messagingSenderId: "1020704134199",
  appId: "1:1020704134199:web:5989cc04a70570cf305bb2",
  measurementId: "G-2SLK7WR7VJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)