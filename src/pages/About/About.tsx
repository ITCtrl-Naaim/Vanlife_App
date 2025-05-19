import { Link } from "react-router";
import aboutImage from "@/assets/images/about.png";
import "./About.scss";

export default function About() {
  return (
    <main className="about-main">
      <img src={aboutImage} alt="Man relaxing on a van" />
      <div className="content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="explore">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </main>
  );
}
