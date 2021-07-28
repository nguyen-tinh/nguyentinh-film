import { useEffect, useState } from "react";
import axios from "../../axios";
import LoadingScreen from "../UI/LoadingScreen"

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      await setMovies(request.data.results);
      await setIsLoading(false)
      return request;
    }

    fetchData();

  }, [fetchUrl]);

  const rowPosterClasses = `max-h-24 w-full object-contain mr-3 rounded-md border-solid border-b-4 border-yellow-300 transition duration-500 ease-in-out transform hover:scale-110 hover:opacity-100 ${
    isLargeRow && "max-h-32 hover:scale-125 hover:opacity-100"
  }`;

  return (
    <div className="text-white ml-5 pt-8">
      <h2>{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {isLoading && <LoadingScreen />}
        {movies.map((movie, i) => (
          <img
            loading="lazy"
            className={rowPosterClasses}
            key={i}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
