import { useParams } from "react-router-dom";
import LikeButton from "../../components/LikeButton";
import type { MovieInfo } from "../../types";
import styles from "./Movie.module.css";

function Movie({ data }: { data: MovieInfo[] }) {
  const { id } = useParams<{ id: string }>();
  const movie = data.find((m) => m.id === parseInt(id!));

  if (!movie) return <h2 className="messages">Фильм не найден</h2>;

  return (
    <div className={styles.movieInfo}>
      <div>
        <img src={movie.img} className={styles.movieImage} />
      </div>
      <div className={styles.movieDetails}>
        <h1>{movie.title}</h1>
        <p className={styles.movieGenres}>{movie.genres}</p>
        <p>{movie.description}</p>
        <div className={styles.movieRating}>
          <a href={`https://imdb.com/title/${movie.imdbId}/`} target="_blank">
            <img
              src="/imdb.svg"
              alt="IMDB rating"
              className={styles.imdbLogo}
            />
          </a>
          <h2>{movie.rating}</h2>
          <LikeButton movieId={movie.id} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
