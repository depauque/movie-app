import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

interface LikeBtnProps {
  movieId: number;
  className?: string;
}

function LikeButton({ movieId, className = "" }: LikeBtnProps) {
  const { likedMovies, toggleLike } = useContext(FavoritesContext);
  const isLiked = likedMovies.includes(movieId);

  return (
    <div className={className}>
      <img
        src={isLiked ? "/upvote_active.svg" : "/upvote_inactive.svg"}
        className="upvote-img"
        onClick={() => toggleLike(movieId)}
      />
    </div>
  );
}

export default LikeButton;
