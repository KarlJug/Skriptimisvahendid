/**
 * Karl Jugapuu
 * Üleasnne 22
 * 27.11.2023
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwJuVeHha5rDhbQVn97le97pyFW8trBJQ",
  authDomain: "ylesanne23.firebaseapp.com",
  projectId: "ylesanne23",
  storageBucket: "ylesanne23.appspot.com",
  messagingSenderId: "245200748052",
  appId: "1:245200748052:web:f527fa909e352c77ddb101"
};

// Initialize Firebase
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
    //see on kõigil oma
    

};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

console.log(app);
console.log(db);
