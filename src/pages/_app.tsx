import "src/styles/globals.scss";

import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import NavigationProvider from "src/store/providers/NavigationProvider";
import ThemeProvider from "src/store/providers/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <ThemeProvider>
        <NavigationProvider>
          <Component {...pageProps} />
        </NavigationProvider>
      </ThemeProvider>
    </div>
  );
}
