import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { mainContext } from "../context/MainProvider";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";
import { useContext } from "react";

const CarouselComponent = () => {
  const { trendingMovies } = useContext(mainContext) as {
    trendingMovies: ITrendingMovies[];
  };

  return (
    <div>
      <Carousel>
        {trendingMovies.map((movie: ITrendingMovies) => (
          <Carousel.Item key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              alt={movie.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
