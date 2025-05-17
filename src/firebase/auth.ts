import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export async function createAccountWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return false;
  }
}
