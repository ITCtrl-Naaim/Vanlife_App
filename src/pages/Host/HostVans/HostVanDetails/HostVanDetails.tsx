import { Suspense } from "react";
import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router";
import { Van } from "../../../Vans/Vans";
import "./HostVanDetails.scss";

export default function HostVanDetails() {
  const vanPromise = useLoaderData();

  function renderElement(van: Van) {
    return (
      <div className="van">
        <div className="head">
          <img src={van.imageURL} alt={`${van.name} van's image`} />
          <div className="van-info">
            <span className={`van-type ${van.type} selected`}>{van.type}</span>
            <h2>{van.name}</h2>
            <span className="price" data-period="/day">
              ${van.price}
            </span>
          </div>
        </div>
        <ul className="van-nav">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              photos
            </NavLink>
          </li>
        </ul>
        <Outlet context={{van}} />
      </div>
    );
  }

  return (
    <div className="host-van-details">
      <Link to="./.." className="go-back">
        <i className="fa-solid fa-arrow-left arrow"></i> Back to all vans
      </Link>
      <Suspense>
        <Await resolve={vanPromise.van}>{renderElement}</Await>
      </Suspense>
    </div>
  );
}
