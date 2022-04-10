// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5s1CpVkUxBur5gFk9ckZBMiArY8ht3Y4",
  authDomain: "ema-john-simple-2d795.firebaseapp.com",
  projectId: "ema-john-simple-2d795",
  storageBucket: "ema-john-simple-2d795.appspot.com",
  messagingSenderId: "952221722984",
  appId: "1:952221722984:web:f9b710bb502f5d6ee34edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth