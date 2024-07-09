// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAnalytics} from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfOZU-XJp9jYvZijOrDUs4lLIhImk01Yg",
  authDomain: "finance-manager-3aeb4.firebaseapp.com",
  projectId: "finance-manager-3aeb4",
  storageBucket: "finance-manager-3aeb4.appspot.com",
  messagingSenderId: "998675396777",
  appId: "1:998675396777:web:e343239a17d3f5758691b8",
  measurementId: "G-3TND03D7B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };