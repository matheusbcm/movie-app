import { useState, useEffect } from "react";
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
    setCurrentIndex((prevIndex) => {
      // Verifica se chegou ao final das imagens
      if (prevIndex >= trendingMovies.length - 6) {
        return 0; // Reinicia o carrossel
      }
      return prevIndex + 1; // Avança para o próximo slide
    });
  };

  console.log(currentIndex);

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
    <div className="carousel max-w-[1280px] relative overflow-hidden bg-black">
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
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-black bg-opacity-50 ">
                <h4 className="text-lg leading-none font-medium text-white ">
                  {movie.title}
                </h4>
                <p className="text-white text-sm ">
                  ⭐ {movie.vote_average.toFixed(1)}/10
                </p>
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
              style={{ width: `${imageWidth}px`, marginRight: "px" }} // Largura fixa e espaçamento
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
      <div className="hidden lg:block px-2">
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
              style={{ width: `${imageWidth}px`, marginRight: "10px" }} // Largura fixa e espaçamento
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
        {/* Left Button */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
          <button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
              }
            }}
            className="p-3 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-75 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0} // Desabilita o botão se estiver na primeira imagem
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h- w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Right Button */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 transform">
          <button
            onClick={() => {
              if (currentIndex >= trendingMovies.length - 6) {
                setCurrentIndex(0); // Reinicia o carrossel
              } else {
                setCurrentIndex((prev) => prev + 1); // Avança para o próximo slide
              }
            }}
            className="p-3 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-75 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
