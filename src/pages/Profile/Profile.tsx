import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import type { MovieInfo } from "../../types";
import styles from "./Profile.module.css";

function Profile({ data }: { data: MovieInfo[] }) {
  const { likedMovies } = useContext(FavoritesContext);
  const favMovies = data.filter((m) => likedMovies.includes(m.id));

  return (
    <div className={styles.profile}>
      <div className={styles.userInfo}>
        <p className={styles.userImg}>👤</p>
        <h1>User</h1>
      </div>
      <div className={styles.favs}>
        <h2>Избранное</h2>
        <ul className={styles.favsList}>
          {favMovies.map((m) => (
            <div className={styles.favItem}>
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
