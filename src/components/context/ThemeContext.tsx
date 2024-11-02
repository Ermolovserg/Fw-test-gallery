import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
  }, []);

const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    setIsDarkTheme(!isDarkTheme);

    localStorage.setItem('theme', newTheme ? 'light' : 'dark');
     return newTheme;
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Error ThemeContext');
  }
  return context;
};