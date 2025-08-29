import DarkModeProvider from "@/context/darkModeContext/darkModeContext";
import MyProviderTitle from "@/context/titleContext/titleContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <MyProviderTitle>
        <Component {...pageProps} />
        <Toaster position="bottom-right" richColors />
      </MyProviderTitle>
    </DarkModeProvider>
  );
}
