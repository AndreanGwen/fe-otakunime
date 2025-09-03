import { Button } from "@/components/ui/button";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useContext } from "react";
import {
  TbCalendarClock,
  TbClock,
  TbHome,
  TbMovie,
  TbSettings2,
  TbSun,
} from "react-icons/tb";

import { toast } from "sonner";

interface PropTypes {
  home: string;
  JadwalRilis: string;
  OngoingAnime: string;
  GenreList: string;
}

const SideBar = (props: PropTypes) => {
  const { home, JadwalRilis, OngoingAnime, GenreList } = props;

  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className={`w-2/8 ${
        isDarkMode ? "bg-white" : "bg-black"
      } min-h-screen pt-9 pl-11 pr-11 ${isMobile ? "hidden" : "block"}`}
    >
      <div className="sticky top-0">
        <div className="">
          <h1
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } text-2xl font-bold`}
          >
            Otaku<span className="text-red-500">nime</span>
          </h1>
        </div>
        <div
          className={`${
            isDarkMode ? "text-black" : "text-white"
          } pt-8 font-semibold pb-4 text-md`}
        >
          <h4>MENU</h4>
        </div>

        <div className="flex flex-col gap-9 pb-5 border-b-1 border-gray-500">
          <Link href={`/`}>
            <div className="flex items-center gap-4">
              <TbHome color={`${home}`} size={25} />
              <p className={`text-sm`} style={{ color: `${home}` }}>
                Home
              </p>
            </div>
          </Link>
          <Link href={`/jadwal-rilis`}>
            <div className="flex items-center gap-3">
              <TbCalendarClock color={`${JadwalRilis}`} size={25} />
              <p className={`text-sm`} style={{ color: `${JadwalRilis}` }}>
                Jadwal Rilis
              </p>
            </div>
          </Link>
          <Link href={`/ongoing-anime`}>
            <div className="flex items-center gap-3">
              <TbClock color={`${OngoingAnime}`} size={25} />
              <p className={`text-sm`} style={{ color: `${OngoingAnime}` }}>
                Ongoing Anime
              </p>
            </div>
          </Link>
          <Link href={`/genre-list/`}>
            <div className="flex items-center gap-3">
              <TbMovie color={`${GenreList}`} size={25} />
              <p className={`text-sm`} style={{ color: `${GenreList}` }}>
                Genre List
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2 pt-7  w-full items-start">
          <Button
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={() => toast.error("Under Development")}
            variant={"default"}
          >
            <TbSettings2
              color={`${isDarkMode ? "white" : "white"}`}
              size={25}
            />
            <p
              className={`${isDarkMode ? "text-white" : "text-white"} text-sm`}
            >
              Settings
            </p>
          </Button>

          <Button
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            variant={"default"}
          >
            <TbSun color={`${isDarkMode ? "white" : "white"}`} size={25} />
            <p
              className={`${isDarkMode ? "text-white" : "text-white"} text-sm`}
            >
              Light Mode
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
