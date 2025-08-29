import Navbar from "@/Comp/Commons/Navbar";
import PageHead from "@/Comp/Commons/PageHead";
import SideBar from "@/Comp/Commons/SideBar";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import { useContext } from "react";

export default function Home() {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <div className="flex w-full">
      <PageHead title="Otakunime" />
      <SideBar
        home={`${isDarkMode ? "#000000" : "#ffffff"}`}
        JadwalRilis={`${isDarkMode ? "#727272" : "#b1b3b8"}`}
        OngoingAnime={`${isDarkMode ? "#727272" : "#b1b3b8"}`}
        GenreList={`${isDarkMode ? "#727272" : "#b1b3b8"}`}
      />

      <Navbar />
    </div>
  );
}
