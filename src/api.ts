import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZq8oZafFQKpB1tvF_jjZWrVXJh5gYatU",
  authDomain: "vanlife-b61f7.firebaseapp.com",
  projectId: "vanlife-b61f7",
  storageBucket: "vanlife-b61f7.firebasestorage.app",
  messagingSenderId: "174435887162",
  appId: "1:174435887162:web:13cc24a416672f2b942d03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}

export async function getVan(id: string) {
  const docRef = doc(db, "vans", id);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data(), id: docSnap.id };
}
