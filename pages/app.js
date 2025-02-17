import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Page mounted:", Component.name);
    
    // Check for system theme preference and load dark mode from local storage
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <main className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <button 
        className="absolute top-4 right-4 p-2 bg-blue-600 text-white rounded"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
      <div className="transition-colors duration-500 ease-in-out"> {/* Added transition for smooth dark mode */}
        <Component {...pageProps} />
      </div>
    </main>
  );
}
