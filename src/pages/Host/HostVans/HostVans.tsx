import { Await, Link, useLoaderData } from "react-router";
import { Van } from "../../Vans/Vans";
import { Suspense } from "react";
import "./HostVans.scss";

export default function HostVans() {
  const vansPromise = useLoaderData();

  function renderElements(vans: Van[]) {
    const vansElements = vans.map((van) => (
      <Link to={van.id} className="van-tile">
        <img src={van.imageURL} alt={`${van.name} van's image`} />
        <div className="info">
          <h3>{van.name}</h3>
          <span className="price" data-period="/day">
            ${van.price}
          </span>
        </div>
      </Link>
    ));
    return vansElements;
  }

  return (
    <section className="host-vans">
      <h2 className="header">Your listed vans</h2>
      <div className="vans-list">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={vansPromise.vans}>{renderElements}</Await>
        </Suspense>
      </div>
    </section>
  );
}
