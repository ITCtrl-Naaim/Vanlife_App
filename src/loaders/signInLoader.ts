import { redirect } from "react-router";
import { getCurrentUser } from "../utils";

export async function loader({ request }: { request: Request }) {
  const user = await getCurrentUser();
  if (user) return redirect("/signout");
  return new URL(request.url).searchParams.get("message");
}
