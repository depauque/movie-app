interface GenresProps {
  genres: string[];
  selectedGenres: string[];
  setSelectedGenres: (value: string[]) => void;
}

function Genres({ genres, selectedGenres, setSelectedGenres }: GenresProps) {
  const handleCheck = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      const removed = selectedGenres.filter((g) => g !== genre);
      setSelectedGenres(removed);
    }
  };

  return (
    <div className="genres">
      {genres.map((g) => (
        <label className="checkbox-input">
          <input
            type="checkbox"
            onChange={(e) => handleCheck(g, e.target.checked)}
          />
          <p>{g}</p>
        </label>
      ))}
    </div>
  );
}

export default Genres;
