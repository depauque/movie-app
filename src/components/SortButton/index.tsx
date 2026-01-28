import styles from "./SortButton.module.css";

interface SortProps {
  sortType: "" | "ASC" | "DSC";
  sortMovies: () => void;
}

function SortButton({ sortType, sortMovies }: SortProps) {
  return (
    <div onClick={sortMovies} className={styles.sortDiv}>
      {sortType === "" && <div className={styles.sortIcon}> 🔄️</div>}
      {sortType === "ASC" && <div className={styles.sortIcon}> ⬇️</div>}
      {sortType === "DSC" && <div className={styles.sortIcon}> ⬆️</div>}
      <div>Сортировать по рейтингу</div>
    </div>
  );
}

export default SortButton;
