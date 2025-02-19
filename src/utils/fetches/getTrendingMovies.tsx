import { ITrendingMovies } from "../../interfaces/ITrendingMovies";

const getTrendingMovies = async (
  url: string,
  setTrendingMovies: (value: ITrendingMovies[]) => void
): Promise<void> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setTrendingMovies(data.results as ITrendingMovies[]);

    console.log(data.results);
  } catch (err) {
    console.error(err);
  }
};

export default getTrendingMovies;
