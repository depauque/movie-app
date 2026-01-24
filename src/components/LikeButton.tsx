import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { motion } from "framer-motion";

interface LikeBtnProps {
  movieId: number;
  className?: string;
}

function LikeButton({ movieId, className = "" }: LikeBtnProps) {
  const { likedMovies, toggleLike } = useContext(FavoritesContext);
  const isLiked = likedMovies.includes(movieId);

  return (
    <div className={className}>
      <motion.img
        src={isLiked ? "/upvote_active.svg" : "/upvote_inactive.svg"}
        className="upvote-img"
        onClick={() => toggleLike(movieId)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

export default LikeButton;
