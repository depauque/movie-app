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
    <div className="pagination">
      {pagesArray.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? "button active" : "button"}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
