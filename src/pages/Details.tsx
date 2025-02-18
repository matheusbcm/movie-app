import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieById } from "../interfaces/IMovieById";
import getMoviesById from "../utils/fetches/getMoviesById";
import getMovieTrailer from "../utils/fetches/getMovieTrailer";

const Details = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<IMovieById | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    if(movieId) {
      getMoviesById(movieId, setMovie);
      getMovieTrailer(movieId, setTrailerKey)
    } 
  }, [movieId]);
  
  if (!movie) {
    return <div>Loading...</div>;
  }
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
            <a href={`https://www.youtube.com/watch?v=${trailerKey}`} target="_blank">
            <button className="btn btn-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Trailer
            </button>
            </a>

            {/* Overview Section */}
            <div className="bg-base-100 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-base-content">{movie.overview}</p>
            </div>

            {/* Rating Section */}
            <div className="flex justify-center gap-8">
              {[1, 2, 3].map((star) => (
                <div key={star} className="flex flex-col items-center">
                  <div className="text-red-500 text-4xl mb-2">★</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
