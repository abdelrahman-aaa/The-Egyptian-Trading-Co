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
      } else if (
        hash.includes("products") ||
        hash.includes("npk") ||
        hash.includes("urea") ||
        hash.includes("sulphur") ||
        hash.includes("potassium") ||
        hash.includes("iron") ||
        hash.includes("manganese") ||
        hash.includes("superphosphate") ||
        hash.includes("limestone") ||
        hash.includes("dap")
      ) {
        setCurrentPage("products");
        if (hash !== "#products") {
          setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        setCurrentPage("home");
        if (hash && hash !== "#hero") {
          setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page, targetAnchor) => {
    setCurrentPage(page);

    if (page === "about") {
      window.location.hash = targetAnchor || "#about";
      if (targetAnchor && targetAnchor !== "#about") {
        setTimeout(() => {
          const el = document.querySelector(targetAnchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (page === "products") {
      if (targetAnchor && targetAnchor !== "#products") {
        window.location.hash = targetAnchor;
        setTimeout(() => {
          const el = document.querySelector(targetAnchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        window.location.hash = "#products";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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
