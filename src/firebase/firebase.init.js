// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3uYZYiexoieJp4ch8KOjNJGcG1DdnQk",
  authDomain: "coffee-store-module-56.firebaseapp.com",
  projectId: "coffee-store-module-56",
  storageBucket: "coffee-store-module-56.firebasestorage.app",
  messagingSenderId: "720166306797",
  appId: "1:720166306797:web:686fb2c66d1a10368e9de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);