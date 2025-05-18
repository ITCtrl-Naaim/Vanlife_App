import { getComments } from "../firebase/api";
import { checkAuth } from "../utils";

export async function loader({ request }: { request: Request }) {
  await checkAuth(request);
  return { comments: getComments() };
}
