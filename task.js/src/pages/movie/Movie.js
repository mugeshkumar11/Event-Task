import React from "react";
import "./movie.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Movie = () => {
  const [user, setUser] = useState([]);

  // const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=452908fad1f909d66d93a3fda8788917&language=en-Us"
      )
      .then((response) => setUser(response.data));
  }, []);

  console.log("data",user);
  return (
    <div>
      <section className="header">
        <section className="container">
          <div className="headerflex">
            <div className="headerlogo">
              <h2>MOVIE BOOK NOW!</h2>
            </div>
            <div className="headerlist">
              <button>Home</button>
              <input type={"search"} placeholder="search"></input>
            </div>
          </div>
        </section>
      </section>
      <section className="movielist">
        <div className="movieflex">
          {/* {user.map((item) => (
            <div className="moviedata">
              <img src={item.poster_path}></img>
              <h3>{item.original_title}</h3>
              <h3>{item.vote_average}</h3>
              <h3>{item.vote_count}</h3>
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default Movie;
