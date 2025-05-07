import { Link } from "react-router";
import "./NotFound.scss"

export default function NotFound() {
  return (
    <main className="not-found-main">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="link-button">
        Return to Home
      </Link>
    </main>
  );
}
