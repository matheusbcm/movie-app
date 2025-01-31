import { useContext } from "react";
import Carousel from "../components/Carousel";
import { mainContext } from "../context/MainProvider";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";

const IntroApp = () => {
  const { trendingMovies } = useContext(mainContext) as {trendingMovies: ITrendingMovies[]}
  return (
    <>
      <h1>Intro App</h1>
      <Carousel />
      <div>
        {trendingMovies.map((movie: ITrendingMovies) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default IntroApp;
