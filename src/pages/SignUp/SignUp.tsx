import { Form, Link, redirect } from "react-router";
import "./SignUp.scss";
import { createAccountWithEmailAndPassword } from "../../firebase/auth";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmedPassword = formData.get("confirmedPassword") as string;
  if (!email || !password || !confirmedPassword) {
    console.error("please enter all fields.");
    return;
  } else if (password !== confirmedPassword) {
    console.error("Please confirm your password correctly");
    return;
  } else {
    const result = await createAccountWithEmailAndPassword(email, password);
    if (result) return redirect("/host");
  }
  return null;
}

export default function SignIn() {
  return (
    <main className="sign-up-main">
      <h1>Register</h1>
      <Form method="post">
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirmedPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button>Sign up</button>
        <p className="redirect-text">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Form>
    </main>
  );
}
