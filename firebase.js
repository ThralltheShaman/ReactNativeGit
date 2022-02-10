// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4TFVXXfHbX5mB5UfRZSknygM7IV6c_qc",
  authDomain: "fir-autth-a93cf.firebaseapp.com",
  projectId: "fir-autth-a93cf",
  storageBucket: "fir-autth-a93cf.appspot.com",
  messagingSenderId: "854951144618",
  appId: "1:854951144618:web:e35280579432efc377f4d3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}