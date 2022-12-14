import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    //run once
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData()
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // movieTrailer(movie?.name || "")
      movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.url || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(error => console.log(error));
    }
    // console.log(trailerUrl)
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className="row_posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            title={movie.name || movie?.title || movie?.original_title}
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row