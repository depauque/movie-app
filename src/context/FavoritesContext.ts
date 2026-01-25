import { createContext } from "react";

interface FavsContext {
  likedMovies: number[];
  toggleLike: (id: number) => void;
}

export const FavoritesContext = createContext<FavsContext>({
  likedMovies: [],
  toggleLike: () => {},
});
