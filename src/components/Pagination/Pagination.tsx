import styles from "./Pagination.module.scss";
import { useTheme } from "../context/ThemeContext";
import darkArrowLeft from "../../img/dark_arrow_left.svg";
import darkArrowRight from "../../img/dark_arrow_right.svg";
import lightArrowLeft from "../../img/light_arrow_left.svg";
import lightArrowRight from "../../img/light_arrow_right.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const ellipsis = "...";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const { isDarkTheme } = useTheme();
  const leftArrow = isDarkTheme ? darkArrowLeft : lightArrowLeft;
  const rightArrow = isDarkTheme ? darkArrowRight : lightArrowRight;

  const getPaginationNumbers = () => {
    const paginationNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i += 1) {
        paginationNumbers.push(i);
      }
    } else if (currentPage <= 2) {
      paginationNumbers.push(1, 2, 3, ellipsis, totalPages);
    } else if (currentPage <= 3) {
      paginationNumbers.push(1, 2, 3, 4, ellipsis, totalPages);
    } else if (currentPage === totalPages - 2) {
      paginationNumbers.push(
        1,
        ellipsis,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else if (currentPage === totalPages - 1) {
      paginationNumbers.push(
        1,
        ellipsis,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else if (currentPage === totalPages) {
      paginationNumbers.push(
        1,
        ellipsis,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      paginationNumbers.push(
        1,
        ellipsis,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        ellipsis,
        totalPages,
      );
    }

    return paginationNumbers;
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        className={styles.pagination__button__arrow}
      >
        <img src={leftArrow} alt="Previous" className={styles.arrow} />
      </button>
      {getPaginationNumbers().map((page, index) => {
        const key =
          typeof page === "number" ? `page-${page}` : `ellipsis-${index}`;
        return page === ellipsis ? (
          <span key={key}>{page}</span>
        ) : (
          <button
            key={key}
            onClick={() => setCurrentPage(page as number)}
            className={`${styles.pagination__button} ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${currentPage === page ? styles["pagination__button--active"] : ""}`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={handleNextPage}
        className={styles.pagination__button__arrow}
      >
        <img src={rightArrow} alt="Next" className={styles.arrow} />
      </button>
    </div>
  );
}
