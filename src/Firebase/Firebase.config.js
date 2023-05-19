// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCElQLwT5cKUjl6t8qF_u76BH-ikoPszok",
  authDomain: "toy-doctor.firebaseapp.com",
  projectId: "toy-doctor",
  storageBucket: "toy-doctor.appspot.com",
  messagingSenderId: "25012263193",
  appId: "1:25012263193:web:ac803dfd792284a29d8d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;