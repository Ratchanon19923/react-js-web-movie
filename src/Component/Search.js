import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
function Search() {
  const { text } = useParams();
  const [cart, setCart] = useState([])
  const baseURL =`https://api.themoviedb.org/3/search/movie?api_key=828623c51d6be19cdbed0ff0823152be&language=en-US&page=1&query=${text}`;

  const [query, setQuery] = useState("");
  
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setQuery(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cart]);

  if (!query) return "loading...";


  return (
    <div>
      <ReactTypingEffect
        text={[
          "หนัง ฮิต ติดเทรน คุณภาพ Full HD",
          "เลือกซื้อได้เลยยยยยย",
        ]}
        speed={150}
        eraseDelay={80}
        className="title"
      ></ReactTypingEffect>

      <div className="container">
        {query.results.map((post, key) => (
          <div className="card" >
            <img 
              src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}
              className="poster"
            ></img>
            <p className="original_title">{post.original_title}</p>
            
            <div className="buybuy">
              <button className="btm-buy" onClick={()=>setCart(post)}>
                สั่งซื้อ {Math.ceil(post.vote_average * 100) / 2} บาท
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
