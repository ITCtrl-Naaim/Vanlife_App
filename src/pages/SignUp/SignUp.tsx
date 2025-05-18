import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router";
import { createUserAccount } from "../../firebase/auth";
import "./SignUp.scss";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmedPassword = formData.get("confirmedPassword") as string;
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  if (!email || !password || !confirmedPassword) {
    console.error("Some fields are not filled.");
    return { error: "Please fill out all fields." };
  } else if (password !== confirmedPassword) {
    console.error("Please confirm your password correctly.");
    return { error: "Please confirm your password correctly." };
  } else {
    const result = await createUserAccount(email, password);
    if (result.success) {
      return redirect(pathname);
    } else {
      return { error: result.error };
    }
  }
}

export default function SignUp() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrorMessage = useActionData();

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
        {formErrorMessage && (
          <h3 className="form-error">{formErrorMessage.error}</h3>
        )}
        <button disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign up"}
        </button>
        <p className="redirect-text">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Form>
    </main>
  );
}
