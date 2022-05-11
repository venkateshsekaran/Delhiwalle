import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
export default function Home() {
  return (
    <div>
      <section className="container my-5 py-4">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h1 className="display-5 mb-5">
              I'm Web Developer <br /> <b>Venkatesh S</b>
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              laborum corrupti deleniti recusandae veniam facere ratione eaque
              eum reiciendis cupiditate quos maxime modi exercitationem, totam,
              necessitatibus eveniet sed rerum mollitia!
            </p>
            <Link
              className="btn btn-outline-primary me-4"
              to="/contact"
              role="button"
            >
              Get Started
            </Link>
            <Link className="btn btn-primary me-4" to="/about" role="button">
              More About Me
            </Link>
          </div>
          <div className="col-md-7 mt-5 d-flex justify-content-center align-items-center">
            <img
              src="./img/home.jpg"
              alt="venkatesh"
              height="300px"
              weight="300px"
            />
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Contact />
    </div>
  );
}
