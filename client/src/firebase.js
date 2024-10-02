// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-49222.firebaseapp.com",
  projectId: "mernestate-49222",
  storageBucket: "mernestate-49222.appspot.com",
  messagingSenderId: "473817790990",
  appId: "1:473817790990:web:a6467bda78e24ded8d1a5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);