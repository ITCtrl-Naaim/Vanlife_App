import { Link, NavLink } from "react-router";
import loginImage from "@/assets/images/loginImage.png";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        #vanlife
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="host"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              vans
            </NavLink>
          </li>
          <li>
            <Link to="signin">
              <img src={loginImage} alt="Login Image" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
