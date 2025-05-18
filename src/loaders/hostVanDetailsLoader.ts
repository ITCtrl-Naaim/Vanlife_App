import { LoaderFunctionArgs } from "react-router";
import { getHostVan } from "../firebase/api";
import { checkAuth } from "../utils";

export async function loader({ params, request }: LoaderFunctionArgs) {
  await checkAuth(request);
  const id = params.id;
  if (id) return { van: getHostVan(id) };
}
