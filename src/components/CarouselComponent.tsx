import React, { useState, useEffect } from "react";
import { mainContext } from "../context/MainProvider";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const { trendingMovies } = useContext(mainContext) as {
    trendingMovies: ITrendingMovies[];
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efeito para alternar os slides automaticamente
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Altera o slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [trendingMovies.length]);

  // Proporção da imagem: 27x40 (largura x altura)
  const imageRatio = 27 / 40; // 0.675
  const imageHeight = 300; // Altura fixa para as imagens
  const imageWidth = imageHeight * imageRatio; // Largura calculada com base na proporção

  return (
    <div className="carousel w-full relative overflow-hidden bg-black">
      {/* Telas pequenas (sm) */}
      <div className="block md:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {trendingMovies.map((movie: ITrendingMovies) => (
            <div key={movie.id} className="w-full flex-shrink-0 relative">
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                  className="object-cover"
                  alt={movie.title}
                />
              </Link>
              {/* Título e Avaliação */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                <h4 className="text-xl font-bold text-white">{movie.title}</h4>
                <p className="text-white text-sm">⭐ {movie.vote_average}/10</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telas médias (md) */}
      <div className="hidden md:block lg:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 20)}%)`, // 4 imagens por vez
          }}
        >
          {trendingMovies.map((movie: ITrendingMovies) => (
            <div
              key={movie.id}
              className="flex-none"
              style={{ width: `${imageWidth}px`, marginRight: "2px" }} // Largura fixa e espaçamento
            >
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  className="object-cover"
                  alt={movie.title}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                  }} // Proporção 27x40
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Telas grandes (lg) */}
      <div className="hidden lg:block">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 20)}%)`, // 5 imagens por vez
          }}
        >
          {trendingMovies.map((movie: ITrendingMovies) => (
            <div
              key={movie.id}
              className="flex-none"
              style={{ width: `${imageWidth}px`, marginRight: "16px" }} // Largura fixa e espaçamento
            >
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  className="object-cover"
                  alt={movie.title}
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                  }} // Proporção 27x40
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
