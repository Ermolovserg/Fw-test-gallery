import React from 'react';
import styles from './Main.module.scss';
import SearchInput from '../Input/Input';
import Gallery from '../Gallery/Gallerey'

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
        <SearchInput />
        <Gallery />
    </main>
  );
};

export default Main;