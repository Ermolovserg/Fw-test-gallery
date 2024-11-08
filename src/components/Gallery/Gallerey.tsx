import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import {
  fetchPaintings,
  fetchAuthors,
  fetchLocations,
  Painting,
} from "../store/gallerySlice";
import { RootState, AppDispatch } from "../store/store";
import styles from "./Gallery.module.scss";

export default function Gallerey() {
  const dispatch: AppDispatch = useDispatch();
  const { paintings, authors, locations } = useSelector(
    (state: RootState) => state.gallery,
  );
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    dispatch(fetchPaintings(""));
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch]);

  const getAuthorName = (authorId: number) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : "unknown";
  };

  const getLocationName = (locationId: number) => {
    const location = locations.find((loc) => loc.id === locationId);
    return location ? location.location : "unknown";
  };

  return (
    <section
      className={`${styles.gallery} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
    >
      {paintings.map((painting: Painting) => (
        <div key={painting.id} className={styles.imageContainer}>
          <img
            src={painting.imageUrl}
            alt={painting.name}
            className={styles.imageArt}
          />
          <div
            className={`${styles.imageInfo} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
          >
            <div
              className={`${styles.slide} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
              data-slide="1"
            >
              <span className={styles.imageText}>{painting.name}</span>
              <span
                className={`${styles.imageText} ${styles.goldText} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
              >
                {painting.created}
              </span>
            </div>
            <div
              className={`${styles.slide} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
              data-slide="2"
            >
              <span className={styles.imageText}>
                {getAuthorName(painting.authorId)}
              </span>
              <span
                className={`${styles.imageText} ${styles.goldText} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
              >
                {getLocationName(painting.locationId)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
