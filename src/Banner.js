import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)
      ]
      );
      return request;
    }
    fetchData();
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
 

  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="banner_contents">
        <h1 className='banner_title'>
          {movie?.title || movie.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button"><a href="https://www.netflix.com/ng/login" >Now Playing</a></button>
          <button className="banner_button">
            <a href="https://www.netflix.com/ng/login" >
              My Play List</a></button>
        </div>
        <h1 className="banner_discription">
          {truncate(movie?.overview, 160)}
        </h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner