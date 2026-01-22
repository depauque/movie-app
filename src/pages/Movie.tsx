import { useParams } from "react-router-dom";
import data from "../data/movies.json";
import LikeButton from "../components/LikeButton";
import "../styles.css";

function Movie() {
  const { id } = useParams<{ id: string }>();
  const movie = data.find((m) => m.id === parseInt(id!));

  if (!movie) return <h2 style={{ margin: "20vh auto" }}>Фильм не найден</h2>;

  return (
    <div className="movie-info">
      <div>
        <img src={movie.img} className="movie-image" />
      </div>
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p className="movie-genres">{movie.genres}</p>
        <p>{movie.description}</p>
        <div className="movie-rating">
          <img src="/imdb.svg" alt="IMDB rating" className="imdb-logo" />
          <h2>{movie.rating}</h2>
          <LikeButton className="like-button--page" movieId={movie.id} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
