import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import GenreCards from "@/Comp/Commons/GenreCards";
import SideBar from "@/Comp/Commons/SideBar";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import axios from "axios";
import { pages } from "next/dist/build/templates/app-page";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GoChevronLeft } from "react-icons/go";

const PagePage = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const router = useRouter();
  const genre = router.query.genre;

  const urlOtakudesu = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const [data, setData] = useState<any>([]);
  const [genreLocal, setGenreLocal] = useState<string | null>(null);

  useEffect(() => {
    const storedGenre = localStorage.getItem("genre");
    const storedPage = localStorage.getItem("page");
    setGenreLocal(storedGenre);

    if (!storedGenre) {
      return;
    }

    try {
      axios
        .get(`${urlOtakudesu}/genres/${storedGenre}/page/${storedPage}`)
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

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
          <div
            className={`flex items-center gap-1 ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          >
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

          <div className={`pb-5`}>
            <GenreCards />
          </div>

          <div className={`pt-7 pb-16 flex justify-center`}>
            <Pagination
              count={data[17]?.count}
              shape="rounded"
              renderItem={(item) => {
                return (
                  <PaginationItem
                    component={Link}
                    href={
                      item.page === 1
                        ? `/genres/${genreLocal}`
                        : `/genres/${genreLocal}/page/${item.page}`
                    }
                    {...item}
                  />
                );
              }}
            />
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

export default PagePage;
