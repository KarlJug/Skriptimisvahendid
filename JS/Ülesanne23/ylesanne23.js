/**
 * Karl Jugapuu
 * Üleasnne 22
 * 27.11.2023
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

// Initialize Firebase
import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(app);
console.log(db);

const kogumik = collection(db, "ylesanne");

async function getCities(db) {
  const citiesCol = collection(db, 'ylesanne');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const reviews = document.getElementById("reviews");
getCities(db).then(data => {
  console.log(data);
  data.forEach(element => {
    console.log(element);
    const text = element.comm;
    const rate = element.rate;
    let review = document.createElement("div");
    review.className = "card-body border rounded border-dark-subtle";
    review.innerHTML = `
      <h5 class="card-title"> ${element.rate} </h5>
      <p class="card-text">${element.comm}</p>
    `;
    reviews.appendChild(review);
  });
});
