// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 


   
  apiKey:  import.meta.env.VITE_TOY_apiKey,
  authDomain: import.meta.env.VITE_TOY_authDomain ,
  projectId:  import.meta.env.VITE_TOY_projectId,
  storageBucket: import.meta.env.VITE_TOY_storageBucket,
  messagingSenderId: import.meta.env.VITE_TOY_messagingSenderId,
  appId:  import.meta.env.  VITE_TOY_appId




   
}
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;