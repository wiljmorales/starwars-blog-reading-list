import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 pe-5">
      <Link to="/" className="w-25 ms-5">
        <img
          src="https://webstockreview.net/images/starwars-clipart-logo-4.png"
          className="w-50"
          style={{
            maxWidth: "100px",
          }}
        />
      </Link>
      <div class="dropdown me-4">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul class="dropdown-menu me-5" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
