import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesContext } from "./context/FavoritesContext";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import type { MovieInfo } from "./types";
import "./styles/styles.css";

const API_URL = "https://6972842532c6bacb12c72734.mockapi.io/api/movies";

function App() {
  const [data, isLoading, error] = useFetch<MovieInfo[]>(API_URL);
  const [likedMovies, setLikedMovies] = useLocalStorage<number[]>("favs", []);

  if (error) return <h1 className="messages">Произошла ошибка</h1>;

  const toggleLike = (id: number) => {
    setLikedMovies((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id],
    );
  }; // TODO: фывфыв

  return (
    <FavoritesContext.Provider value={{ likedMovies, toggleLike }}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home data={data} isLoading={isLoading} />}
            />
            <Route path="/movie/:id" element={<Movie data={data} />} />
            <Route path="/profile" element={<Profile data={data} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
}

export default App;
