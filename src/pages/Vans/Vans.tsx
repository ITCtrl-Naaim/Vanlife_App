import { Suspense } from "react";
import { useSearchParams, useLoaderData, Await, Link } from "react-router";
import type { Van } from "@/types/van";
import LoadingUI from "@/components/LoadingUI/LoadingUI";
import "./Vans.scss";

export default function Vans() {
  const vansPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  function handleFilters(value: string | null) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete("type");
      } else {
        prevParams.set("type", value);
      }
      return prevParams;
    });
  }

  function renderElements(vans: Van[]) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vansElements = displayedVans.map((van) => (
      <Link
        key={van.id}
        to={van.id}
        className="van-tile"
        state={{ search: `?${searchParams}`, type: typeFilter }}
      >
        <img src={van.imageURL} alt={`${van.name} van's image`} />
        <div className="van-info">
          <h2>{van.name}</h2>
          <span className="price" data-period="/day">
            ${van.price}
          </span>
        </div>
        <span className={`van-type ${van.type} selected`}>{van.type}</span>
      </Link>
    ));
    return (
      <>
        <ul>
          <li>
            <button
              onClick={() => handleFilters("simple")}
              className={`van-type simple ${
                typeFilter === "simple" ? "selected" : ""
              }`}
            >
              Simple
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilters("luxury")}
              className={`van-type luxury ${
                typeFilter === "luxury" ? "selected" : ""
              }`}
            >
              Luxury
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilters("rugged")}
              className={`van-type rugged ${
                typeFilter === "rugged" ? "selected" : ""
              }`}
            >
              Rugged
            </button>
          </li>
          {typeFilter && (
            <li>
              <button
                className="clear-filter"
                onClick={() => handleFilters(null)}
              >
                Clear filters
              </button>
            </li>
          )}
        </ul>
        <div className="vans-list">{vansElements}</div>
      </>
    );
  }

  return (
    <main className="vans-main">
      <h1>Explore our van options</h1>
      <Suspense fallback={<LoadingUI />}>
        <Await resolve={vansPromise.vans}>{renderElements}</Await>
      </Suspense>
    </main>
  );
}
