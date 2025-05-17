import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router";
import { Van } from "../../Vans/Vans";
import "./Dashboard.scss";

export default function Dashboard() {
  const vansPromise = useLoaderData();

  function renderElements(vans: Van[]) {
    const vansElements = vans.map((van) => (
      <article key={van.id} className="van-tile">
        <img src={van.imageURL} alt={`${van.name} van's image`} />
        <div className="info">
          <h3>{van.name}</h3>
          <span className="price" data-period="/day">
            ${van.price}
          </span>
        </div>
        <Link to="edit" className="edit">
          Edit
        </Link>
      </article>
    ));
    return vansElements;
  }

  return (
    <section className="host-dashboard">
      <div className="welcome">
        <h1>Welcome!</h1>
        <div className="income">
          <p>
            Income last <span>30 days</span>
          </p>
          <Link to="income" className="details">
            Details
          </Link>
        </div>
        <span className="total">$2,260</span>
      </div>
      <div className="review-score">
        <h2>
          Review score <i className="fa-solid fa-star star"></i> 5.0
          <span>/5</span>
        </h2>
        <Link to="reviews" className="details">
          Details
        </Link>
      </div>
      <div className="vans-list">
        <div className="header">
          <h2>Your listed vans</h2>
          <Link to="vans" className="view-all">
            View all
          </Link>
        </div>
        <div className="vans-container">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={vansPromise.vans}>{renderElements}</Await>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
