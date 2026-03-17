import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  useEffect(() => {
    document.body.classList.add('light-mode');
    return () => document.body.classList.remove('light-mode');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark: false }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
