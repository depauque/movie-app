import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import LikeButton from "../components/LikeButton";
import type { MovieInfo } from "../types";

function Profile({ data }: { data: MovieInfo[] }) {
  const { likedMovies } = useContext(FavoritesContext);
  const favMovies = data.filter((m) => likedMovies.includes(m.id));

  console.log(likedMovies);

  return (
    <div className="profile">
      <div className="user-info">
        <p className="user-img">👤</p>
        <h2>Пользователь</h2>
      </div>
      <div className="favs">
        <h2>Избранное</h2>
        <ul className="fav-list">
          {favMovies.map((m) => (
            <div className="fav-item">
              <LikeButton className="like-button--page" movieId={m.id} />
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
