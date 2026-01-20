interface GenresProps {
  genres: string[];
}

function Genres({ genres }: GenresProps) {
  return (
    <div className="genres">
      {genres.map((g) => (
        <label className="checkbox-input">
          <input type="checkbox" />
          <p>{g}</p>
        </label>
      ))}
    </div>
  );
}

export default Genres;
