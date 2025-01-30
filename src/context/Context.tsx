import { createContext } from "react";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";

interface ITrendingMoviesContext {
  trendingMovies: ITrendingMovies[],
  setTrendingMovies: React.Dispatch<React.SetStateAction<ITrendingMovies[]>>
}

export const TrendingMoviesContext = createContext<ITrendingMoviesContext>(null!);