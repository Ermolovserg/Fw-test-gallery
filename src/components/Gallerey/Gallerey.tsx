import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import {
  fetchPaintings,
  fetchAuthors,
  fetchLocations,
} from "../store/gallereySlice/asyncSlice";
import { Painting } from "../store/gallereySlice/types";
import { RootState, AppDispatch } from "../store/store";
import styles from "./Gallery.module.scss";
import Pagination from "../Pagination/Pagination";
import ImageCard from "../ImageCard/ImageCard";
import NotFound from "../NotFound/NotFound";

export default function Gallery() {
  const dispatch: AppDispatch = useDispatch();
  const { paintings, authors, locations, totalPages } = useSelector(
    (state: RootState) => state.gallery,
  );
  const { inputValue } = useSelector((state: RootState) => state.search);
  const { isDarkTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(
      fetchPaintings({ q: inputValue, page: currentPage, limit: itemsPerPage }),
    );
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch, inputValue, currentPage]);

  return (
    <div
      className={`${styles.galleryWrapper} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
    >
      <section className={styles.gallery}>
        {paintings.length > 0 ? (
          paintings.map((painting: Painting) => (
            <ImageCard
              key={painting.id}
              painting={painting}
              authors={authors}
              locations={locations}
              isDarkTheme={isDarkTheme}
            />
          ))
        ) : (
          <NotFound inputValue={inputValue} />
        )}
      </section>
      {paintings.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
