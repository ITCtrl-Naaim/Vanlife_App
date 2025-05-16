import { getComments } from "../api";

export function loader() {
  return { comments: getComments() };
}
