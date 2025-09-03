import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import GenreCards from "@/Comp/Commons/GenreCards";
import SideBar from "@/Comp/Commons/SideBar";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GoChevronLeft } from "react-icons/go";

const Page = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const router = useRouter();
  const genre = router.query.genre;

  return (
    <div className={`w-full flex`}>
      <SideBar
        home={`${isDarkMode ? "#b1b3b8" : "#b1b3b8"}`}
        JadwalRilis={`${isDarkMode ? "#b1b3b8" : "#b1b3b8"}`}
        OngoingAnime={`${isDarkMode ? "#b1b3b8" : "#b1b3b8"}`}
        GenreList={`${isDarkMode ? "#000000" : "#ffffff"}`}
      />

      <div
        className={`w-full min-h-screen ${
          isDarkMode ? "bg-white" : "bg-black"
        } flex pt-9`}
      >
        <div className="">
          <div className={`flex items-center gap-1`}>
            <GoChevronLeft
              size={30}
              className={`cursor-pointer`}
              onClick={() => {
                localStorage.removeItem("genre");
                router.back();
              }}
            />
            <h1 className={`text-2xl font-semibold`}>Daftar Genre {genre}</h1>
          </div>

          <div className="">
            <GenreCards />
          </div>
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

export default Page;
