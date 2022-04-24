import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import {BsFillCartPlusFill ,BsCartPlus} from 'react-icons/bs';



function Header() {
  const baseURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=828623c51d6be19cdbed0ff0823152be&language=en-US&page=1";

  const [input, setInput] = useState("");
  
  function getStorageValue(cart, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(cart);
    let initial = JSON.parse(saved);
    return initial || '';
  }

  

  

  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            Hot Movie
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                ซีรี่ย์<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                หนังการ์ตูน
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                หนังฝรั่ง
              </a>
            </li>
          </ul>
          {/* <div className="icon">
          <BsFillCartPlusFill color='white' size='2.2rem' onClick={getStorageValue}><alert>kuy</alert></BsFillCartPlusFill>
          </div> */}
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setInput(e.target.value)}></input>
             <Link to={`/Search/${input}`}>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
