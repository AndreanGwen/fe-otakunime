import Genre from "@/Comp/Commons/Genre";
import SideBar from "@/Comp/Commons/SideBar";
import CompleteAnime from "@/Comp/Commons/CompleteAnime";

import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";

const GenreList = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <div className={`w-full flex min-h-screen bg-black`}>
      <SideBar
        home={`${isDarkMode ? "#b1b3b8" : "#b1b3b8"}`}
        JadwalRilis={`${isDarkMode ? "#b1b3b8" : "#b1b3b8"}`}
        OngoingAnime={`${isDarkMode ? "#b1b3b8" : "#b1b3b8"}`}
        GenreList={`${isDarkMode ? "#000000" : "#ffffff"}`}
      />

      <div
        className={`w-full min-h-screen ${
          isDarkMode ? "bg-white" : "bg-black"
        }`}
      >
        <div
          className={`${
            isDarkMode ? "text-black" : "text-white"
          } pt-9 text-2xl font-semibold`}
        >
          <h1>All Genre :</h1>
        </div>

        <div className={`pt-2 w-full gap-3 `}>
          <Genre />
        </div>
      </div>

      <div
        className={`w-3/8 min-h-screen ${
          isDarkMode ? "bg-white" : "bg-black"
        } pr-13 pt-8 `}
      >
        <CompleteAnime />
      </div>
    </div>
  );
};

export default GenreList;
