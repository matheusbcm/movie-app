import { createContext, useEffect, useState } from "react";
import { ITrendingMovies } from "../interfaces/ITrendingMovies";
import getTrendingMovies from "../utils/fetches/getTrendingMovies";

export const mainContext = createContext({}) //pode ignorar essa marcacao de erro, pois o typescript ja sabe que o valor do contexto é um objeto

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_TMDB_URL = `https://api.themoviedb.org/3/`;

export default function MainProvider({children}: {children: React.ReactNode}) {

    const [trendingMovies, setTrendingMovies] = useState<ITrendingMovies[]>([])

    useEffect(()=>{
        getTrendingMovies(
            `${BASE_TMDB_URL}trending/movie/week?api_key=${TMDB_API_KEY}`,
            setTrendingMovies
        );
    },[])


    return (
        <mainContext.Provider value={{ trendingMovies }}>
            {children}
        </mainContext.Provider>
    )
}