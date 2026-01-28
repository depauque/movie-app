import type { MovieInfo } from "../../types";
import styles from "./MovieCard.module.css";

interface MovieCardType {
  movie: MovieInfo;
}

function MovieCard({ movie }: MovieCardType) {
  return (
    <div className={styles.movieCard}>
      <img src={movie.img} />
      <div className={styles.movieCardInfoContainer}>
        <div className={styles.movieCardInfo}>
          <h3>{movie.title}</h3>
          <p className={styles.movieCardGenres}>{movie.genres}</p>
        </div>
        <div>
          <h3>
            {movie.rating >= 7.5 ? "🔥 " : movie.rating < 6 ? "🍌 " : "⭐ "}
            {movie.rating}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
