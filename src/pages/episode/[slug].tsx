import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import SideBar from "@/Comp/Commons/SideBar";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const VideoPage = () => {
  const darkModeContext = useContext(DarkModeContext);
  const urlSamehada = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const router = useRouter();
  const { slug } = router.query;

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const [data, setData] = useState<any>([]);
  const [dataSecond, setDataSecond] = useState<any>([]);

  useEffect(() => {
    if (!slug) return;
    axios.get(`${urlSamehada}/episode/${slug}`).then((res) => {
      setData(res?.data[0]);
    });
    axios
      .get(`${urlSamehada}/anime/${localStorage.getItem("title")}`)
      .then((res) => {
        setDataSecond(res.data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  console.log(dataSecond[2]?.episodes);

  return (
    <div className="w-full flex min-h-screen">
      <SideBar
        home={`${isDarkMode ? "#000000" : "#ffffff"}`}
        JadwalRilis={`${isDarkMode ? "#727272" : "#b1b3b8"}`}
        OngoingAnime={`${isDarkMode ? "#727272" : "#b1b3b8"}`}
        GenreList={`${isDarkMode ? "#727272" : "#b1b3b8"}`}
      />

      <div
        className={`w-full ${
          isDarkMode ? "bg-white" : "bg-black"
        } min-h-screen`}
      >
        {data.length === 0 ? (
          <div className={`pt-9 w-full`}>
            <Skeleton className="h-[70px] w-[600px]" />
            <div className={"flex gap-10"}>
              <Skeleton className="h-[70px] w-[120px]" />
              <Skeleton className="h-[70px] w-[170px]" />
            </div>
          </div>
        ) : (
          <>
            <div className={`flex gap-7 items-start`}>
              <div className={`pt-10.5 `}>
                <IoIosArrowBack
                  size={25}
                  onClick={() => router.back()}
                  className="cursor-pointer bg-red-200 flex items-center justify-center rounded-full p-1"
                />
              </div>
              <div className={`flex flex-col w-full`}>
                <div
                  className={`pt-9 text-2xl font-semibold pb-3  gap-10 ${
                    isDarkMode ? "text-black" : "text-white"
                  }`}
                >
                  <h1>{data?.title}</h1>
                </div>

                <div
                  className={`flex gap-10 pb-7 ${
                    isDarkMode ? "text-black" : "text-white"
                  }`}
                >
                  <div className={"flex items-center-safe gap-2"}>
                    <FaUser color={`${isDarkMode ? "#000000" : "#ffffff"}`} />
                    <p>{data?.dataPostReleased?.[0].posted}</p>
                  </div>
                  <div className={"flex items-center-safe gap-2"}>
                    <FaCalendarAlt
                      color={`${isDarkMode ? "#000000" : "#ffffff"}`}
                    />
                    <p>{data?.dataPostReleased?.[1].posted}</p>
                  </div>
                </div>

                <div className={``}>
                  <iframe
                    src={data?.urlFrame}
                    className={`w-5/6 h-[450px] rounded-lg border-2 border-white`}
                    allowFullScreen={true}
                  />
                </div>

                <div className={`pt-5`}>
                  {dataSecond.length === 0 ? (
                    <></>
                  ) : (
                    <>
                      {dataSecond[2]?.episodes.map(
                        (item: any, index: number) => {
                          const urlArray = item.split("/episode/")[1];
                          return (
                            <Link href={`/episode/${urlArray}`}>
                              <Button color="primary" size="small">
                                {urlArray}
                              </Button>
                            </Link>
                          );
                        }
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className={`w-3/8 min-h-screen ${
          isDarkMode ? "bg-white" : "bg-black"
        } pr-13 pt-8`}
      >
        <CompleteAnime />
      </div>
    </div>
  );
};

export default VideoPage;
