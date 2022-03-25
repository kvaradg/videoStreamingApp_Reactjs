// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//for storing photo
import { getStorage}from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpJO4XIGDZTD5_XTzQC0SGHi-IAt0HUP8",
  authDomain: "streambase-302ae.firebaseapp.com",
  projectId: "streambase-302ae",
  storageBucket: "streambase-302ae.appspot.com",
  messagingSenderId: "788109595719",
  appId: "1:788109595719:web:49355120f17a5df7adcd62",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export let auth = getAuth(firebase);
export let storage = getStorage(firebase);
export default firebase;