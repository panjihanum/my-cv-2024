import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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
    setUseDarkTheme((prevTheme) => {
      localStorage.setItem("useDarkTheme", !prevTheme ? "1" : "0");
      return !prevTheme;
    });
  };

  useEffect(() => {
    if (
      localStorage.getItem("useDarkTheme") &&
      localStorage.getItem("useDarkTheme") == "0"
    ) {
      setUseDarkTheme(false);
    }
  }, []);

  const value: ThemeContextType = {
    useDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
