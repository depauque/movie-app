interface SortProps {
  sortType: "" | "ASC" | "DSC";
  sortMovies: () => void;
}

function SortButton({ sortType, sortMovies }: SortProps) {
  return (
    <div onClick={sortMovies} className="sort-div">
      {sortType === "" && <div className="sort-icon"> 🔄️</div>}
      {sortType === "ASC" && <div className="sort-icon"> ⬇️</div>}
      {sortType === "DSC" && <div className="sort-icon"> ⬆️</div>}
      <div>Сортировать по рейтингу</div>
    </div>
  );
}

export default SortButton;
