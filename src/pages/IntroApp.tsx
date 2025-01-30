import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY; // API KEY

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const IntroApp = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
        console.log(data);
      } catch (err) {
        setError("Erro ao carregar os filmes.");
        console.error(err);
      } finally {
        setLoading(false);
      } // FIM DO TRY-CATCH ??
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Carousel />
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default IntroApp;
