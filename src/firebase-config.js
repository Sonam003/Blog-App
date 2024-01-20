// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEpqGIbmrH7PFuxqnP_CLghOeqEFEGde0",
  authDomain: "blog-app-697fa.firebaseapp.com",
  projectId: "blog-app-697fa",
  storageBucket: "blog-app-697fa.appspot.com",
  messagingSenderId: "383096708885",
  appId: "1:383096708885:web:c4ffc7b420c4f8bffa931c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();