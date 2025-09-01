import { Skeleton } from "@/components/ui/skeleton";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaCalendarAlt, FaPlay } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const CardPageHome = () => {
  const urlSamehada = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = axios.get(`${urlSamehada}/api/completeAnime`).then((res) => {
      setData(res?.data);
    });
  }, [urlSamehada]);

  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {data.length === 0 ? (
        <>
          <div className="flex flex-wrap gap-4">
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-[100px] w-[75px] rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[30px] w-[350px] " />

                <div className="flex-flex-col space-y-1">
                  <Skeleton className="h-[20px] w-[120px]" />
                  <Skeleton className="h-[20px] w-[90px]" />
                  <Skeleton className="h-[20px] w-[70px]" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={`flex flex-wrap gap-4 `}>
          {data?.slice(0, 15).map((item: any, index: any) => {
            const newTitle = item?.url?.split("/anime/")[1];

            return (
              <div className="">
                <Link href={`/anime/${newTitle}`}>
                  <div
                    className={`flex  gap-2  ${
                      isDarkMode ? "shadow-lg" : "bg-white/15"
                    } rounded-xl p-2 ${isMobile ? "w-28" : "w-[430px]"}`}
                  >
                    <Image
                      src={item?.image}
                      alt={`animePhotos`}
                      width={isMobile ? 20 : 75}
                      height={0}
                      className="rounded-xl"
                    />
                    <div className={`w-full flex flex-col gap-2.5`}>
                      <h1
                        className={`${
                          isDarkMode ? "text-black" : "text-white "
                        }font-semibold`}
                      >
                        {item?.title}
                      </h1>

                      <div className={`flex items-center`}>
                        <div className={`flex flex-col`}>
                          <p
                            className={` ${
                              isDarkMode ? "text-black" : "text-white/70"
                            } text-sm flex items-center gap-1`}
                          >
                            <FaPlay size={10} />
                            {item?.episode}
                          </p>
                          <p
                            className={` ${
                              isDarkMode ? "text-black" : "text-white/70"
                            } text-sm  flex items-center gap-1`}
                          >
                            <FaCalendarAlt />
                            {item?.rating}
                          </p>
                          <p
                            className={`${
                              isDarkMode ? "text-black" : "text-white/70"
                            } text-sm  flex items-center gap-1`}
                          >
                            <FaCalendarAlt />
                            {item?.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardPageHome;
