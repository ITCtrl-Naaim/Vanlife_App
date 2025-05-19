import { Link, useRouteError } from "react-router";
import "./ErrorBoundary.scss";

export default function ErrorBoundary({
  title,
  desc,
}: {
  title?: string;
  desc?: string;
}) {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="error-boundary">
      <h1>{`${title || "Something went wrong"} 😥`}</h1>
      <p className="desc">{desc || "Something went wrong while loading"}</p>
      <Link to="/" className="link-button">
        Return to Home
      </Link>
    </div>
  );
}
