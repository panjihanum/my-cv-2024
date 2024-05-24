import { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextType {
  useDarkTheme: boolean;
  toggleTheme: () => void;
}

const initialContext: ThemeContextType = {
  useDarkTheme: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(initialContext);

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setUseDarkTheme((prevTheme) => !prevTheme);
  };

  const value: ThemeContextType = {
    useDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
