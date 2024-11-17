// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcCtkjXpTpsQ9mm4Fk4WfZSSnAMdzMdr0",
  authDomain: "dragon-news-auth-43c4c.firebaseapp.com",
  projectId: "dragon-news-auth-43c4c",
  storageBucket: "dragon-news-auth-43c4c.firebasestorage.app",
  messagingSenderId: "80919218120",
  appId: "1:80919218120:web:847877c1fa2df5f9b162fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  export default auth;