import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesContext } from "./context/FavoritesContext";
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import type { MovieInfo } from "./types";
import "./styles.css";

function App() {
  const [data, setData] = useState<MovieInfo[]>([]);
  const [likedMovies, setLikedMovies] = useLocalStorage<number[]>("favs", []);

  useEffect(() => {
    fetch("https://6972842532c6bacb12c72734.mockapi.io/api/movies").then(
      (res) =>
        res
          .json()
          .then((data) => setData(data))
          .catch((err) => console.log("Не грузится!:", err)),
    );
  }, []);

  const toggleLike = (id: number) => {
    setLikedMovies((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id],
    );
  };

  return (
    <FavoritesContext.Provider value={{ likedMovies, toggleLike }}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
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
