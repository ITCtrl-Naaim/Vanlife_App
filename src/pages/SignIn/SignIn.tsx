import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router";
import { signInUserAccount } from "@/firebase/authHelpers";
import "./SignIn.scss";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  if (!email || !password) {
    console.error("Some fields are not filled.");
    return { error: "Please fill out all fields." };
  }
  const result = await signInUserAccount(email, password);

  if (result.success) {
    return redirect(pathname);
  } else {
    return { error: result.error };
  }
}

export default function SignIn() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const signInErrorMessage = useLoaderData();
  const formErrorMessage = useActionData();
  const [searchParams] = useSearchParams();
  const redirectParam = searchParams.get("redirectTo");

  return (
    <main className="sign-in-main">
      <h1>Sign in to your account</h1>
      {signInErrorMessage && (
        <h2 className="sign-in-error">{signInErrorMessage}</h2>
      )}
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
        </div>
        {formErrorMessage && (
          <h3 className="form-error">{formErrorMessage.error}</h3>
        )}
        <button disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
        <p className="redirect-text">
          Don't have an account?
          <Link
            to={
              redirectParam ? `/signup?redirectTo=${redirectParam}` : "/signup"
            }
          >
            Create one now
          </Link>
        </p>
      </Form>
    </main>
  );
}
