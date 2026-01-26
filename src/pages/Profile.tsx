import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import type { MovieInfo } from "../types";

function Profile({ data }: { data: MovieInfo[] }) {
  const { likedMovies } = useContext(FavoritesContext);
  const favMovies = data.filter((m) => likedMovies.includes(m.id));

  return (
    <div className="profile">
      <div className="user-info">
        <p className="user-img">👤</p>
        <h1>User</h1>
      </div>
      <div className="favs">
        <h2>Избранное</h2>
        <ul className="fav-list">
          {favMovies.map((m) => (
            <div className="fav-item">
              <Link to={`/movie/${m.id}`}>
                <li>{m.title}</li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
