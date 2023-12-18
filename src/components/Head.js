import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="">
      <nav className="">
        <ul className="nav-bar">
          <li className="li">
            <Link className="route" to="/">
              Home
            </Link>
          </li>
          <li className="li">
            <Link className="route" to="/about">
              About
            </Link>
          </li>
          <li className="li">
            <Link className="route" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Head;
