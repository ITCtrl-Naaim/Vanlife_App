import { LoaderFunctionArgs } from "react-router";
import { getVan } from "../firebase/api";

export function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  if (id) return { van: getVan(id) };
}
