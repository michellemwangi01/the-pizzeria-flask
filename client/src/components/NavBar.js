import React, { useContext, useState, useEffect } from "react";
import "./App.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="navbar-container">
        <h1>La Pizzeria</h1>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Find your pizza"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
