import Carousel from "react-bootstrap/Carousel";
import { mainContext } from "../context/MainProvider";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const { trendingMovies } = useContext(mainContext) as {
    trendingMovies: ITrendingMovies[];
  };

  return (
    <div className="flex justify-center">
      <Carousel pause="hover" controls={false} indicators={false}>
        {trendingMovies.map((movie: ITrendingMovies) => (
          <Carousel.Item key={movie.id} interval={5000} className="flex-row">
            <Link to={`/details/${movie.id}`}>
              <img
                className="d-block w-80 h-auto"
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
