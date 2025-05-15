import { LoaderFunctionArgs } from "react-router";
import { getVan } from "../api";

export function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  if (id) return { van: getVan(id) };
}
