import { useEffect } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("Page mounted:", Component.name);
  }, []);

  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
