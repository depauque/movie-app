import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesContext } from "./context/FavoritesContext";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import "./styles.css";

function App() {
  const [likedMovies, setLikedMovies] = useLocalStorage<number[]>("favs", []);

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
              <Route path="/" element={<Home />} />
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
