// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO2yhjhx-HkqjKTAsS6UhDyU49Bj9d-N4",
  authDomain: "gerusa-gamm.firebaseapp.com",
  projectId: "gerusa-gamm",
  storageBucket: "gerusa-gamm.appspot.com",
  messagingSenderId: "814263803106",
  appId: "1:814263803106:web:0c7b73c0abb2a8af2052bb",
  measurementId: "G-XVF25BM3FL"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)