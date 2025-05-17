import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

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

// Fetch Comments
export async function getComments() {
  const querySnapshot = await getDocs(commentsCollectionRef);
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
