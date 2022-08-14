import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const {store, actions} = useContext(Context)
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
      <div className="dropdown me-4">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
          <span className="badge bg-secondary">{store.favorites.length}</span>
        </button>
        <ul className="dropdown-menu me-5" aria-labelledby="dropdownMenuButton1">
          
          {store.favorites.map((favorite, index) => {
            return (
            <li key={index} className="d-flex">
              <Link to={favorite.link} className="dropdown-item" href="#">
                {favorite.name}
              </Link>
              <div 
                className="pt-1" 
                style={{cursor: "pointer"}}
                onClick={() => {
                  actions.removeFavorite(favorite.name)
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </li>
          )
          })}
        </ul>
      </div>
    </nav>
  );
};
