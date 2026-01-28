import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MovieCard from "../MovieCard";
import LikeButton from "../LikeButton";
import type { MovieInfo } from "../../types";
import styles from "./MovieList.module.css";

interface MovieProps {
  moviesToRender: MovieInfo[];
}

function MovieList({ moviesToRender }: MovieProps) {
  return (
    <div className={styles.movies}>
      {moviesToRender.map((movie) => (
        <motion.div
          key={movie.id}
          layout
          className={styles.parentContainer}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Link to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
          <LikeButton
            extraClassName={styles.likeButtonCard}
            movieId={movie.id}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default MovieList;
