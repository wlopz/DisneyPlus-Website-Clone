// Import the functions you need from the compat version
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase using the compat version
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth(); // Use compat auth
const db = firebase.firestore(); // Use compat Firestore
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// Export auth, provider, storage, and db
export { auth, provider, storage, db };
export default db;
