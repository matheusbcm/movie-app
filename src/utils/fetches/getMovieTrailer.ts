import { BASE_TMDB_URL, TMDB_API_KEY } from "../../context/MainProvider";
import { IMovieTrailer } from "../../interfaces/IMovieTrailer";

const getMovieTrailer = async (movieID: string, setFunc: React.Dispatch<React.SetStateAction<string | null>>) => {
    try {
        const response = await fetch(`${BASE_TMDB_URL}movie/${movieID}/videos?api_key=${TMDB_API_KEY}`);
        const data: IMovieTrailer = await response.json();
        const trailerKey: string | undefined = data.results.find((item) => item.type === 'Trailer')?.key;

        if(trailerKey) setFunc(trailerKey);
    } catch(error) {
        console.error(error);
    }
}

export default getMovieTrailer;