import { Painting, Author, Location } from "../store/gallereySlice/types";
import styles from "./ImageCard.module.scss";

interface ImageCardProps {
  painting: Painting;
  authors: Author[];
  locations: Location[];
  isDarkTheme: boolean;
}

export default function ImageCard({
  painting,
  authors,
  locations,
  isDarkTheme,
}: ImageCardProps) {
  const getAuthorName = (authorId: number) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : "unknown";
  };

  const getLocationName = (locationId: number) => {
    const location = locations.find((loc) => loc.id === locationId);
    return location ? location.location : "unknown";
  };

  return (
    <div className={styles.imageContainer}>
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
  );
}
