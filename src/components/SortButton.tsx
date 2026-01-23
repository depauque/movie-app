interface SortProps {
  sortType: "" | "ASC" | "DSC";
  sortMovies: () => void;
}

function SortButton({ sortType, sortMovies }: SortProps) {
  return (
    <button onClick={sortMovies} className="sort-button">
      Сортировать по рейтингу
      {sortType === "" && <span> 🔄️</span>}
      {sortType === "ASC" && <span> ⬇️</span>}
      {sortType === "DSC" && <span> ⬆️</span>}
    </button>
  );
}

export default SortButton;
