import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { motion } from "framer-motion";
import styles from "./LikeButton.module.css";

interface LikeBtnProps {
  movieId: number;
  extraClassName?: string;
}

function LikeButton({ movieId, extraClassName }: LikeBtnProps) {
  const { likedMovies, toggleLike } = useContext(FavoritesContext);
  const isLiked = likedMovies.includes(movieId);

  return (
    <div className={`${styles.likeButton} ${extraClassName}`}>
      <motion.img
        src={isLiked ? "/upvote_active.svg" : "/upvote_inactive.svg"}
        onClick={() => toggleLike(movieId)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

export default LikeButton;
