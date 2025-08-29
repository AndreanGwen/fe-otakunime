import Link from "next/link";
import { IoInformationCircleOutline } from "react-icons/io5";
import { toast, Toaster } from "sonner";
import SearchBar from "../SearchBar";
import CompleteAnime from "../CompleteAnime";
import CardPageHome from "../CardPageHome";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";

const Navbar = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <div className="flex flex-col w-full">
      {/* Navbar */}
      <div
        className={`w-full h-15 ${
          isDarkMode ? "bg-white" : "bg-black"
        } flex items-center justify-between border-b-1 border-gray-700 pr-13 z-10 `}
      >
        <div className={`flex text-white  gap-6 font-semibold z-10`}>
          <Link href={`/blog/cara-download`}>
            <h1
              className={`hover:text-white ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              Cara Download
            </h1>
          </Link>

          <Link href={`/dmca`}>
            <h1
              className={`hover:text-white ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              DMCA
            </h1>
          </Link>

          <Link
            href={`https://web.facebook.com/groups/otakudesu.io?_rdc=1&_rdr#`}
          >
            <h1
              className={`hover:text-white ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              Grup FB
            </h1>
          </Link>
        </div>

        <div className="">
          <Toaster />
          <IoInformationCircleOutline
            color={` ${isDarkMode ? "#000000" : "#b1b3b8"}`}
            size={25}
            onClick={() =>
              toast("Website ini baru bisa menampilkan 480p", {
                description: "API : Scrapper dari otakudesu.best",
                action: {
                  label: "Close",
                  onClick: () => console.log("Close"),
                },
              })
            }
          />
        </div>
      </div>

      <div className="w-full h-fit bg-green-100 flex justify-between">
        <div
          className={`w-full min-h-screen ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
        >
          <div
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } text-2xl pt-10 font-bold`}
          >
            Anime Terbaru
          </div>
          <div className={`pt-5 pb-16`}>
            <CardPageHome />
          </div>
        </div>
        <div
          className={`w-3/8 min-h-screen ${
            isDarkMode ? "bg-white" : "bg-black"
          } pr-13 pt-8`}
        >
          <SearchBar />
          <CompleteAnime />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
