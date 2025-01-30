import { useContext } from "react";
import Carousel from "../components/Carousel";
import { TrendingMoviesContext } from "../context/Context";

const Home = () => {

  const { trendingMovies } = useContext(TrendingMoviesContext);
  return (
    <>
      <h1>Home</h1>
      <Carousel />
      {trendingMovies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>{movie.title}</p>
        </div>
      ))}
      <div><p>???</p></div>
    </>
  );
};

export default Home;
