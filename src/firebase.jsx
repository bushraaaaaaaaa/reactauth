// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71VdTi86dgEauduusiIXNIPBesNs-jyo",
  authDomain: "reacttodo-3a131.firebaseapp.com",
  projectId: "reacttodo-3a131",
  storageBucket: "reacttodo-3a131.appspot.com",
  messagingSenderId: "104020381656",
  appId: "1:104020381656:web:e6964a6837744abb3decad"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export {auth}
