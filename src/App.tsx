import { Header } from "./components/Header";
import { useTheme } from "./context/ThemeContext";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";

function App() {
  const { useDarkTheme } = useTheme();
  return (
    <div className={`${useDarkTheme ? "dark" : ""}`}>
      <div className={`flex flex-col dark:bg-dark`}>
        <Header />
        <HomePage />
        <AboutMePage />
        <PortfolioPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
