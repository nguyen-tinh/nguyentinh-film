import { useEffect } from "react";
import { useState } from "react";
import axios from "../../axios";
import requests from "../../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  return (
    <header
      className="relative h-112 text-white object-contain"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-8 pt-36 h-88">
        <h1 className="text-5xl font-extrabold pb-1">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="space-x-3 pt-4">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="w-full pt-4 text-md font-semibold max-w-md line-clamp-3">
          {movie?.overview}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
