import { useContext } from "react";
import Carousel from "../components/Carousel";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";
import { TrendingMoviesContext } from "../context/Context";


const IntroApp = () => {

  const { trendingMovies } = useContext(TrendingMoviesContext);

  return (
    <>
      <Carousel />
      <h1>Intro App</h1>
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
