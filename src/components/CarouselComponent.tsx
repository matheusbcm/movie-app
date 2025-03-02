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
    <div className="w-full px-2 bg-slate-600 flex justify-center">
      <Carousel
        pause="hover"
        controls={true}
        indicators={true}
        className="
          [&_.carousel-control-prev]:hidden
          [&_.carousel-control-next]:hidden
          [&_.carousel-indicators]:hidden
          md:[&_.carousel-control-prev]:block
          md:[&_.carousel-control-next]:block
          md:[&_.carousel-indicators]:hidden
          lg:[&_.carousel-control-prev]:block
          lg:[&_.carousel-control-next]:block
          lg:[&_.carousel-indicators]:block
        "
      >
        {trendingMovies.map((movie: ITrendingMovies) => (
          <Carousel.Item key={movie.id} interval={3000}>
            <Link to={`/details/${movie.id}`}>
              <img
                className="w-full h-auto sm:h-[200px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </Link>
            <Carousel.Caption className="h-1/4 absolute bottom-0 left-0 right-0 p-0 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-0">
                {movie.title}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
                ⭐ {movie.vote_average}/10
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
