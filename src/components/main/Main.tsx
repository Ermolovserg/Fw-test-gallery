import styles from "./Main.module.scss";
import SearchInput from "../Input/Input";
import Gallery from "../Gallerey/Gallerey";

export default function Main() {
  return (
    <main className={styles.main}>
      <SearchInput />
      <Gallery />
    </main>
  );
}
