import { getComments } from "../firebase/api";

export function loader() {
  return { comments: getComments() };
}
