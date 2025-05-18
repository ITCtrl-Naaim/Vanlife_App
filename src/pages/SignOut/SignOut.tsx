import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import "./SignOut.scss";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function SignOut() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignOut() {
    setLoading(true);
    await signOut(auth);
    navigate("/signin");
  }

  const user = auth.currentUser;

  return (
    <main className="sign-out-main">
      <h1>Welcome, {user?.displayName || "friend"}.</h1>
      <button
        className="sign-out-button"
        disabled={loading}
        onClick={handleSignOut}
      >
        {loading ? "Signing out..." : "Sign Out"}
      </button>
    </main>
  );
}
