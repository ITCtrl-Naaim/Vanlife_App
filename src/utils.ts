import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router";
import { auth } from "./firebase/config";

export function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

export async function checkAuth(request: Request) {
  const pathname = new URL(request.url).pathname;
  const user = await getCurrentUser();
  if (!user) {
    throw redirect(
      `/signin?message=You must sign in first.&redirectTo=${pathname}`
    );
  }
}
