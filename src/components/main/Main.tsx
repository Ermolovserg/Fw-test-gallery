import React from 'react';
import styles from './Main.module.scss';
import SearchInput from '../Input/Input';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
        <SearchInput />
    </main>
  );
};

export default Main;