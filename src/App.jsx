import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes("about")) return "about";
    if (hash.includes("products")) return "products";
    return "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("about")) {
        setCurrentPage("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash.includes("products")) {
        setCurrentPage("products");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page, targetAnchor) => {
    setCurrentPage(page);

    if (page === "about") {
      window.location.hash = "#about";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "products") {
      window.location.hash = "#products";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (targetAnchor && targetAnchor !== "#hero") {
        window.location.hash = targetAnchor;
        setTimeout(() => {
          const el = document.querySelector(targetAnchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        window.location.hash = "#hero";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      {currentPage === "about" && <AboutPage onNavigate={navigateTo} />}
      {currentPage === "products" && <ProductsPage onNavigate={navigateTo} />}
      {currentPage === "home" && <HomePage onNavigate={navigateTo} />}
    </>
  );
}

export default App;
