import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vanlife-b61f7.firebaseapp.com",
  projectId: "vanlife-b61f7",
  storageBucket: "vanlife-b61f7.firebasestorage.app",
  messagingSenderId: "174435887162",
  appId: "1:174435887162:web:13cc24a416672f2b942d03",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
