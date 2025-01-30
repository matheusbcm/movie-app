import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/Home.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import IntroApp from "./pages/IntroApp.tsx";
import { useEffect, useState } from "react";
import getTrendingMovies from "./utils/fetches/getTrendingMovies.tsx";
import { ITrendingMovies } from "./interfaces/ITrendingMovies.ts";
import { TrendingMoviesContext } from "./context/Context.tsx";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_TMDB_URL = `https://api.themoviedb.org/3/`;

function App() {

  const [trendingMovies, setTrendingMovies] = useState<ITrendingMovies[]>([]);

  useEffect(() => {
    async function getMoviesInUseEffect() {
      const trendingMoviesData = await getTrendingMovies(`${BASE_TMDB_URL}trending/movie/week?api_key=${TMDB_API_KEY}`);
      setTrendingMovies(trendingMoviesData);
    }
    getMoviesInUseEffect();
}, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<IntroApp />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return (
    <div>
      <TrendingMoviesContext.Provider value={{trendingMovies, setTrendingMovies}}>
        <RouterProvider router={router} />
      </TrendingMoviesContext.Provider>
    </div>
  );
}

export default App;
