import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";
import { FirebaseError } from "firebase/app";

const errorMessages: Record<string, string> = {
  "auth/invalid-credential": "Invalid email or password.",
  "auth/user-not-found": "No user found with this email.",
  "auth/wrong-password": "Incorrect password.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/invalid-email": "Please enter a valid email address.",
};

export async function createUserAccount(email: string, password: string) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    if (error instanceof FirebaseError) {
      const code = error.code;
      const friendlyMessage =
        errorMessages[code] || "Something went wrong. Please try again.";
      console.error(error.message);
      return { success: false, error: friendlyMessage };
    }
    return { success: false, error: "Unknown error occured!" };
  }
}

export async function signInUserAccount(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    if (error instanceof FirebaseError) {
      const code = error.code;
      const friendlyMessage =
        errorMessages[code] || "Something went wrong. Please try again.";
      console.error(error.message);
      return { success: false, error: friendlyMessage };
    }
    return { success: false, error: "Unknown error occured!" };
  }
}
