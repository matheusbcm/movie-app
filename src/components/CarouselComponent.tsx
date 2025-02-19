import "bootstrap/dist/css/bootstrap.css";
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
    <div className="w-[428px] h-auto">
      <Carousel pause="hover" controls={true} indicators={true}>
        {trendingMovies.map((movie: ITrendingMovies) => (
          <Carousel.Item key={movie.id} interval={5000} className="">
            <Link to={`/details/${movie.id}`}>
              <img
                className="w-[428px] h-auto"
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                alt={movie.title}
              />
              {/* <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption> */}
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
