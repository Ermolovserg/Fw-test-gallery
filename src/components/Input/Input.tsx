import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Input.module.scss";
import { useTheme } from "../context/ThemeContext";
import { setInputValue, clearInputValue } from "../store/searchSlice";
import { fetchPaintings } from "../store/gallereySlice/asyncSlice";
import magnifyerDark from "../../img/dark_magnifyer.svg";
import magnifyerLight from "../../img/light_magnifyer.svg";
import closeDark from "../../img/dark_close.svg";
import closeLight from "../../img/light_close.svg";
import { useAppDispatch } from "../store/store";

interface RootState {
  search: {
    inputValue: string;
  };
}

export default function SearchInput() {
  const { isDarkTheme } = useTheme();
  const dispatch = useAppDispatch();
  const inputValue = useSelector((state: RootState) => state.search.inputValue);
  const magnifyer = isDarkTheme ? magnifyerDark : magnifyerLight;
  const closeIcon = isDarkTheme ? closeDark : closeLight;
  const [isFocus, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  const clearInput = () => {
    dispatch(clearInputValue());
  };

  useEffect(() => {
    const queryParams = {
      q: inputValue,
      page: 1,
      limit: 6,
    };

    dispatch(fetchPaintings(queryParams));
  }, [inputValue, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${isFocus ? styles.focus_input : ""}`}
      >
        <img
          src={magnifyer}
          alt="magnifyer"
          className={styles.container__magnifyer}
        />
        <input
          className={`${styles.container__input} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
          placeholder="Painting title"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {inputValue && (
          <button
            onClick={clearInput}
            className={styles.container__clearButton}
          >
            <img
              src={closeIcon}
              alt="clearText"
              className={styles.container__clearIcon}
            />
          </button>
        )}
      </div>
    </div>
  );
}
