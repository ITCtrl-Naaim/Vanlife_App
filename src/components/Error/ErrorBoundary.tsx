import { useRouteError, isRouteErrorResponse } from "react-router";
import "./ErrorBoundary.scss"

export default function ErrorBoundary({ title }: { title?: string }) {
  const error = useRouteError();

  return (
    <main className="error-boundary">
      <h1>{title || "Something went wrong 😢"}</h1>
      <p>
        {isRouteErrorResponse(error)
          ? `${error.status} - ${error.statusText}`
          : error instanceof Error
          ? error.message
          : "Unknown error"}
      </p>
    </main>
  );
}
