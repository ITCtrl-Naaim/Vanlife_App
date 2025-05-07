import { getVans } from "../api";

export function loader() {
  return { vans: getVans() };
}
