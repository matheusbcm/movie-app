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
import Details from "./pages/Details.tsx";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<IntroApp />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="details/:movieId" element={<Details />} />
      </Route>
    )
  );
  return (
      <RouterProvider router={router} />
  );
}

export default App;
