import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesContext } from "./context/FavoritesContext";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import type { MovieInfo } from "./types";
import "./styles.css";

function App() {
  const [data, setData] = useState<MovieInfo[]>([]);
  const [likedMovies, setLikedMovies] = useState<number[]>(() => {
    const saved = localStorage.getItem("favs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      fetch("https://6972842532c6bacb12c72734.mockapi.io/api/movies").then(
        (res) => res.json().then((data) => setData(data)),
      );
    }, 800);
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(likedMovies));
  }, [likedMovies]);

  const toggleLike = (id: number) => {
    setLikedMovies((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id],
    );
  };

  return (
    <>
      <FavoritesContext.Provider value={{ likedMovies, toggleLike }}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </FavoritesContext.Provider>
    </>
  );
}

export default App;
