import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="https://cognida.ai/">
            Cognida.ai
          </a>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/list" class="nav-link">
                list
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                upload
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
