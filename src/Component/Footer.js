import React from "react";
import './Footer.css';
import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {FaLine ,FaFacebookSquare ,FaInstagramSquare} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div class="footer">
        <footer>
          <div class="social">
            <a href="#">
              <i class="icons"><FaInstagramSquare></FaInstagramSquare></i>
              
            </a>
            <a href="#">
              <i class="icons"><FaLine></FaLine></i>
            </a>
            
            <a href="#">
              <i class="icons"><FaFacebookSquare></FaFacebookSquare></i>
            </a>
          </div>
          <ul class="list">
            <li class="">
              <a href="#">Home</a>
            </li>
            <li class="">
              <a href="#">Services</a>
            </li>
            <li class="">
              <a href="#">About</a>
            </li>
          </ul>
          <p class="copyright">Game Company  © 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
