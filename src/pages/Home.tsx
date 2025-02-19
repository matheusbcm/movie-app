import { useContext } from "react";
import CarouselComponent from "../components/CarouselComponent";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";
import { mainContext } from "../context/MainProvider";

const Home = () => {
  const { trendingMovies } = useContext(mainContext) as {
    trendingMovies: ITrendingMovies[];
  };

  if (!trendingMovies || trendingMovies.length === 0) {
    return <div>Carregando filmes...</div>;
  }

  return (
    <>
      <h1>Home</h1>
      <CarouselComponent />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {trendingMovies.map((movie: ITrendingMovies) => (
          <div key={movie.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
