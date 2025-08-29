import { FaChartLine, FaPlay, FaRegStar } from "react-icons/fa";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";

const CompleteAnime = () => {
  const urlSamehada = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const [trending, setTrending] = useState([]);
  const [lengthTrend, setLenghtTrend] = useState(true);

  useEffect(() => {
    try {
      axios.get(`${urlSamehada}/api/completeAnime`).then((res) => {
        setTrending(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <div className="pt-7 flex flex-col">
      <div className="flex items-center gap-4 pb-5">
        <FaChartLine color={`${isDarkMode ? "#000000" : "#ffffff"}`} />
        <h1
          className={`${
            isDarkMode ? "text-black" : "text-white"
          } font-semibold`}
        >
          Complete Anime
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        {!trending || trending.length === 0 ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[50px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          trending
            .slice(15, lengthTrend ? 18 : 24)
            .map((element: any, index: number) => (
              <a href={`/anime/${element?.url.split("/anime/")[1]}`}>
                <div
                  key={index}
                  className={`flex ${
                    isDarkMode ? "shadow-lg" : ""
                  } p-2 rounded-md gap-2`}
                >
                  <Image
                    src={element?.image}
                    alt="trending-img"
                    width={60}
                    height={60}
                    className="rounded-xl bg-cover"
                  />
                  <div
                    className={`${isDarkMode ? "text-black" : "text-white"}`}
                  >
                    <h1 className="font-semibold">{element?.title}</h1>
                    <div className="flex items-center gap-2">
                      <p className="text-sm flex items-center text-red-300">
                        <FaRegStar /> {element?.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))
        )}
      </div>

      <div className="flex w-full  pt-7">
        <Button
          className="bg-red-500 w-2/3 rounded-full text-white hover:bg-red-400 cursor-pointer"
          onClick={() => setLenghtTrend(!lengthTrend)}
        >
          <FaPlay />
          See More
        </Button>
      </div>
    </div>
  );
};

export default CompleteAnime;
