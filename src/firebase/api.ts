import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./config";

const vansCollectionRef = collection(db, "vans");
const commentsCollectionRef = collection(db, "comments");

// Fetch Vans
export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}

// Fetch a Single Van
export async function getVan(id: string) {
  const docRef = doc(db, "vans", id);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data(), id: docSnap.id };
}

// Fetch User Specific Vans
export async function getHostVans() {
  const q = query(vansCollectionRef, where("uid", "==", auth.currentUser?.uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}

// Fetch a Single Van User Specific
export async function getHostVan(id: string) {
  const q = query(
    vansCollectionRef,
    where("uid", "==", auth.currentUser?.uid),
    where("__name__", "==", id)
  );
  const querySnapshot = await getDocs(q);
  const docSnap = querySnapshot.docs[0];
  return { ...docSnap.data(), id: docSnap.id };
}

// Fetch Comments
export async function getComments() {
  const querySnapshot = await getDocs(commentsCollectionRef);
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
