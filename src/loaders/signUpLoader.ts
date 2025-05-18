import { redirect } from "react-router";
import { getCurrentUser } from "../utils";

export async function loader() {
  const user = await getCurrentUser();
  if (user) return redirect("/signout");
}
