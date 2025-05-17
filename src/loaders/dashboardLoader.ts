import { getVans } from "../firebase/api";

export function loader() {
  return { vans: getVans() };
}
