import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTypingEffect from "react-typing-effect";
import { BsFillCartPlusFill, BsCartPlus } from "react-icons/bs";
import "./Home.css";
import { motion } from "framer-motion"

function Home() {
  const baseURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=828623c51d6be19cdbed0ff0823152be&language=en-US&page=1";

  // moviename?: string
  const [movies, setMovies] = useState(null);
  const [show, setShow] = useState(false)
  const [cart, setCart] = useState(() => {
    const sum = localStorage.getItem("cart");
    if (sum) {
      return JSON.parse(sum);
    } else {
      return [];
    }
  });
  
// console.log(movie)

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // storing input name
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const Overview = (getdata) => {
    setCart([...cart, getdata]);
  };

  let select = [];
    
  if (cart.length !== 0) {
    cart.forEach((element) => {
      select.push({
        title: element.title,
        vote_average: element.vote_average * 20,
        poster_path: element.poster_path,
      });
    });
  }
  
  function Showselect() {
     setShow(!show)
  }
 

  if (!movies) return "loading...";

  return (
    <div className="bg">
      <ReactTypingEffect
        text={[
          "หนัง ฮิต ติดเทรน คุณภาพ Full HD",
          "เลือกซื้อได้เลยยยยยย",
        ]}
        speed={150}
        eraseDelay={80}
        className="title"
      ></ReactTypingEffect>

        {show?(<div className="Ccontainer">
          {select.map((dataC) => (
            <div className="Ccard">
            <img
              src={`https://image.tmdb.org/t/p/w500/${dataC.poster_path}`}
              className="Cposter"
            ></img>
            <span className="Ctitle">ชื่อ : {dataC.title}</span>
            <span className="Cprice" >ราคา : {dataC.vote_average}</span>
          </div> 
          ))}
        </div>):''}

      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel">
            <div className="">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src={require("../img/movie-hd.jpg")}
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={require("../img/movie-7.jpg")}
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={require("../img/movie-8.jpg")}
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="container">
        <div className="box-1">
          <BsFillCartPlusFill
            className="BsFillCartPlusFill"
            size="2.5rem"
            onClick={Showselect}
          ></BsFillCartPlusFill>
          <p className="select">{cart.length}</p>
        </div>
        {movies.results.map((post, key) => (
          <motion.div layout className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}
              className="poster"
            ></img>
            <p className="original_title">{post.original_title}</p>

            {/* <p className="original_title">{post.overview}</p> */}
            <div className="buybuy">
              <button className="btm-buy" onClick={() => Overview(post)}>
                สั่งซื้อ {Math.ceil(post.vote_average * 20)} บาท
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
