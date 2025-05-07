import { NavLink, Outlet } from "react-router";
import "./HostLayout.scss";

export default function HostLayout() {
  return (
    <main className="host-layout-main">
      <ul>
        <li>
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="income"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vans"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
