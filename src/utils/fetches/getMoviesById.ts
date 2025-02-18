import { BASE_TMDB_URL, TMDB_API_KEY } from "../../context/MainProvider";
import { IMovieById } from "../../interfaces/IMovieById";

export default async function getMoviesById(movieId: string, setMovie: React.Dispatch<React.SetStateAction<IMovieById | null>>): Promise<void> {
    try {
        const response = await fetch(`${BASE_TMDB_URL}movie/${movieId}?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        setMovie(data);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}