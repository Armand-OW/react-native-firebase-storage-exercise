// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApOjjbRsgqwPjkKsV4OR0ge-JwXMnu9X0",
  authDomain: "class-work-26301.firebaseapp.com",
  projectId: "class-work-26301",
  storageBucket: "class-work-26301.appspot.com",
  messagingSenderId: "1014190952032",
  appId: "1:1014190952032:web:ccff44e5ae427a4c08bd05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);