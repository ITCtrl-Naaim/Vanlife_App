import { Await, useLoaderData } from "react-router";
import "./Reviews.scss";
import { Suspense } from "react";

export default function Reviews() {
  const commentsDataPromise = useLoaderData();
  const starsArray = [5, 4, 3, 2, 1];
  const overallRating = 5;

  function renderElements(
    commentsData: {
      stars: number;
      name: string;
      date: string;
      comment: string;
    }[]
  ) {
    const starsCount: { [key: string]: number } = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
    };
    for (const comment of commentsData) {
      starsCount[comment.stars] += 1;
    }
    const reviewsCount = commentsData.length;

    const ratingItems = starsArray.map((rating) => {
      const ratingPercentage = (starsCount[rating] / reviewsCount) * 100;
      return (
        <li key={rating}>
          <span>{`${rating} ${rating === 1 ? "star" : "stars"}`}</span>
          <div className="rating-bar">
            <span style={{ width: `${ratingPercentage}%` }}></span>
          </div>
          <span>{ratingPercentage}%</span>
        </li>
      );
    });

    const commentsElements = commentsData.map((comment, index) => {
      const stars = starsArray.map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star star ${
            index < comment.stars ? "filled" : ""
          }`}
        ></i>
      ));
      return (
        <article key={index} className="comment">
          <div className="stars">{stars}</div>
          <div className="header">
            <span className="name">{comment.name}</span>
            <span className="date">{comment.date}</span>
          </div>
          <p className="comment-text">{comment.comment}</p>
        </article>
      );
    });
    return (
      <>
        <div className="rating">
          <p>
            <span className="overall-rating">{overallRating}.0</span>
            <i className="fa-solid fa-star star filled"></i> overall rating
          </p>
          <ul className="rating-items">{ratingItems}</ul>
        </div>
        <div className="comments">
          <h2>Reviews ({reviewsCount})</h2>
          {commentsElements}
        </div>
      </>
    );
  }

  return (
    <section className="host-reviews">
      <h1>
        Your reviews <span>last 30 days</span>
      </h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={commentsDataPromise.comments}>{renderElements}</Await>
      </Suspense>
    </section>
  );
}
