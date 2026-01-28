import styles from "./Genres.module.css";

interface GenresProps {
  allGenres: string[];
  selectedGenres: string[];
  setSelectedGenres: (value: string[]) => void;
}

function Genres({ allGenres, selectedGenres, setSelectedGenres }: GenresProps) {
  const handleCheck = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      const removed = selectedGenres.filter((g) => g !== genre);
      setSelectedGenres(removed);
    }
  };

  return (
    <div className={styles.genres}>
      {allGenres.map((g) => (
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            onChange={(e) => handleCheck(g, e.target.checked)}
          />
          <p className={selectedGenres.includes(g) ? styles.activeGenre : ""}>
            {g}
          </p>
        </label>
      ))}
    </div>
  );
}

export default Genres;
