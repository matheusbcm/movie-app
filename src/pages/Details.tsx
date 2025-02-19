import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieById } from "../interfaces/IMovieById";
import getMoviesById from "../utils/fetches/getMoviesById";
import getMovieTrailer from "../utils/fetches/getMovieTrailer";
import YouTube from "react-youtube";

const Details = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<IMovieById | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if(movieId) {
      getMoviesById(movieId, setMovie);
      getMovieTrailer(movieId, setTrailerKey);
    } 
  }, [movieId]);
  
  if (!movie) {
    return <div>Loading...</div>;
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Backdrop Image */}
      <div className="relative w-full h-[400px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Movie Info */}
          <div className="w-full md:w-2/3 lg:w-3/4 text-white">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            
            {/* Watch Trailer Button */}
            {trailerKey && (
              <button
                onClick={() => setShowTrailer(!showTrailer)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors mb-4"
              >
                {showTrailer ? 'Fechar Trailer' : 'Assistir Trailer'}
              </button>
            )}

            {/* Trailer Modal */}
            {showTrailer && trailerKey && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    onClick={() => setShowTrailer(false)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                  >
                    Fechar
                  </button>
                  <YouTube videoId={trailerKey} opts={opts} />
                </div>
              </div>
            )}

            <p className="text-lg mb-4">{movie.overview}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Data de Lançamento:</p>
                <p>{new Date(movie.release_date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Avaliação:</p>
                <p>{movie.vote_average.toFixed(1)} / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
