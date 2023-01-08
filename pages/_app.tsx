import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant, Proza_Libre } from "@next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "auto",
  weight: ["300", "400", "700"]
});

const porzaLibre = Proza_Libre({
  subsets: ["latin"],
  display: "auto",
  weight: ["400", "700"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-display: ${cormorant.style.fontFamily};
            --font-serif: ${porzaLibre.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
