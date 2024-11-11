import styles from "./NotFound.module.scss";
import { useTheme } from "../context/ThemeContext";

interface NotFoundProps {
  inputValue: string;
}

export default function NotFound({ inputValue }: NotFoundProps) {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${styles.notFound} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
    >
      <h2>
        No matches for{" "}
        <span className={styles.notFound__bold}>{inputValue}</span>
      </h2>
      <p>Please try again with a different spelling or keywords.</p>
    </div>
  );
}
