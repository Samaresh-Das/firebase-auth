// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiTYEmKnB0hK2YbhHKIAke72X6yS1hqbo",
  authDomain: "fir-auth-aaf93.firebaseapp.com",
  projectId: "fir-auth-aaf93",
  storageBucket: "fir-auth-aaf93.appspot.com",
  messagingSenderId: "1065335138688",
  appId: "1:1065335138688:web:81f5eb995880f2b61e3965",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
