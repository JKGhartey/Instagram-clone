// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Dq828S7b9hWD2wu43vUvo07JfwGRblE",
  authDomain: "instagram-clone-e8166.firebaseapp.com",
  projectId: "instagram-clone-e8166",
  storageBucket: "instagram-clone-e8166.appspot.com",
  messagingSenderId: "786407314737",
  appId: "1:786407314737:web:632a102d75581673984c10",
  measurementId: "G-SJLNPDKW0V",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
