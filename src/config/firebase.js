import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

config()

console.log(process.env.API_KEY)
console.log(process.env.AUTH_DOMAIN)


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId:process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBDbwiNOFvaLQLmg1NsW3e81Sh2-5hfi0s",
//     authDomain: "fixmycode-7cf98.firebaseapp.com",
//     projectId: "fixmycode-7cf98",
//     storageBucket: "fixmycode-7cf98.appspot.com",
//     messagingSenderId: "808769966039",
//     appId: "1:808769966039:web:b6cad997a962942a0b0592",
//     measurementId: "G-33XKYRCF45"
//   };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;