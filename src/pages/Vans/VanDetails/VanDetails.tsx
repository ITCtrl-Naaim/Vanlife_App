import { Await, Link, useLoaderData, useLocation } from "react-router";
import { Suspense } from "react";
import { Van } from "@/types/van";
import "./VanDetails.scss";

export default function VanDetails() {
  const vanPromise = useLoaderData();
  const location = useLocation();

  const search = location.state.search;
  const type = location.state.type || "all";

  function renderElement(van: Van) {
    return (
      <div className="van-details">
        <img src={van.imageURL} alt={`${van.name} van's image`} />
        <div className="van-info">
          <span className={`van-type ${van.type} selected`}>{van.type}</span>
          <h2>{van.name}</h2>
          <span className="price" data-period="/day">
            ${van.price}
          </span>
          <p className="description">{van.description}</p>
          <Link to="rent" className="rent-btn">
            Rent This Van
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="van-details-main">
      <Link to={`./..${search}`} className="go-back">
        <i className="fa-solid fa-arrow-left arrow"></i> Back to
        {` ${search && type}`} vans
      </Link>
      <Suspense>
        <Await resolve={vanPromise.van}>{renderElement}</Await>
      </Suspense>
    </main>
  );
}
