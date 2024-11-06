import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./Input.module.scss";
import { useTheme } from "../context/ThemeContext";
import { setInputValue, clearInputValue } from "../store/searchSlice";
import magnifyerDark from "../../img/dark_magnifyer.svg";
import magnifyerLight from "../../img/light_magnifyer.svg";
import closeDark from "../../img/dark_close.svg";
import closeLight from "../../img/light_close.svg";

interface RootState {
  search: {
    inputValue: string;
  };
}

export default function SearchInput() {
  const { isDarkTheme } = useTheme();
  const dispatch = useDispatch();
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

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, {
          [styles.darkTheme]: isDarkTheme,
          [styles.lightTheme]: !isDarkTheme,
          [styles.focus_input]: isFocus,
        })}
      >
        <img
          src={magnifyer}
          alt="magnifyer"
          className={styles.container__magnifyer}
        />
        <input
          className={classNames(styles.container__input, {
            [styles.darkTheme]: isDarkTheme,
            [styles.lightTheme]: !isDarkTheme,
          })}
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
