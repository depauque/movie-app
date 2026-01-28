import styles from "./Pagination.module.css";

interface PaginationProps {
  setCurrentPage: (value: number) => void;
  pagesArray: number[];
  currentPage: number;
}

function Pagination({
  setCurrentPage,
  pagesArray,
  currentPage,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      {pagesArray.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${styles.button} ${page === currentPage ? styles.active : ""}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
