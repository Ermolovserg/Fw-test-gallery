import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.scss";
import logoDark from "../../img/logo_dark.svg";
import logoLight from "../../img/logo_light.svg";
import buttonDark from "../../img/dark_icon.svg";
import buttonLight from "../../img/light_icon.svg";

export default function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const logo = isDarkTheme ? logoLight : logoDark;
  const buttonImage = isDarkTheme ? buttonLight : buttonDark;

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
    >
      <nav className={styles.header__nav}>
        <img src={logo} alt="logo" className={styles.header__nav__logo} />
        <button onClick={toggleTheme} className={styles.header__nav__button}>
          <img
            src={buttonImage}
            alt="button"
            className={styles.header__nav__buttonImage}
          />
        </button>
      </nav>
    </header>
  );
}
