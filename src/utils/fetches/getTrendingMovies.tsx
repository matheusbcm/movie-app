import { ITrendingMovies } from "../../interfaces/ITrendingMovies";

const getTrendingMovies = async (url: string): Promise<ITrendingMovies[]> => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data.results);
      return data.results;

    } catch (err) {
      console.error(err);
      return [];
    }
}

export default getTrendingMovies;