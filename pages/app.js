import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Page mounted:", Component.name);

    // Check for system theme preference and load dark mode from local storage
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }

    return () => {
      console.log("Page unmounted:", Component.name);
    };
  }, [Component.name]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <main className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <button 
        className="absolute top-4 right-4 p-2 bg-blue-600 text-white rounded focus:ring-2 focus:ring-blue-400"
        onClick={toggleDarkMode}
        onKeyDown={(e) => e.key === "Enter" && toggleDarkMode()}
        aria-label="Toggle Dark Mode"
      >
        Toggle Dark Mode
      </button>
      <div className="transition-colors duration-500 ease-in-out">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
