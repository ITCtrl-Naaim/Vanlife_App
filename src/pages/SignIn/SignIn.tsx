import { Form, Link } from "react-router";
import "./SignIn.scss";

export default function SignIn() {
  return (
    <main className="sign-in-main">
      <h1>Sign in to your account</h1>
      <Form method="post">
        <div className="inputs">
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button>Sign in</button>
        <p className="sign-up-text">
          Don't have an account? <Link to="/signup">Create one now</Link>
        </p>
      </Form>
    </main>
  );
}
