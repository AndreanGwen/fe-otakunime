import { Skeleton } from "@/components/ui/skeleton";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const GenreCards = () => {
  const urlOtakudesu = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const genre = localStorage.getItem("genre");
    if (!genre) {
      return;
    }
    axios.get(`${urlOtakudesu}/genres/${genre}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <div className={`pt-8 flex flex-wrap gap-4`}>
      {data.length === 0 ? (
        <>
          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>

          <div className={`w-[320px] h-fit bg-white shadow-md p-2`}>
            <div className={`w-full h-[57px] flex items-center justify-center`}>
              <Skeleton className="h-[40px] w-[200px] " />
            </div>

            <div
              className={`w-full h-[23px] flex items-center justify-between`}
            >
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
              <Skeleton className="h-[23px] w-[100px]" />
            </div>

            <div className={`w-full h-[36px] flex items-end pb-2`}>
              <Skeleton className="h-[23px] w-full" />
            </div>

            <div className={`w-full h-fit flex gap-2.5`}>
              <div className="">
                <Skeleton className="h-[150px] w-[111px]" />
              </div>

              <div
                className={`flex flex-col justify-between w-full gap-2 h-fit`}
              >
                <Skeleton className="h-[117px] w-[184px]" />

                <Skeleton className="h-[25px] w-[184px]" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          {data.slice(0, 15).map((item: any) => {
            return (
              <div
                className={`w-[320px] h-fit  shadow-md ${
                  isDarkMode ? "bg-white" : "bg-black"
                }`}
              >
                <div
                  className={`w-full h-[57px] ${
                    isDarkMode
                      ? "bg-white border border-black/20"
                      : "bg-black  border border-white/20"
                  } pt-3 flex justify-center text-sm font-semibold text-red-400`}
                >
                  {item?.animeTitle}
                </div>

                <div
                  className={`w-full h-[23px] ${
                    isDarkMode ? "bg-white" : "bg-black"
                  } flex justify-between`}
                >
                  <div
                    className={`w-[100px] h-full text-[10px] flex items-center p-2 truncate overflow-x-auto border  ${
                      isDarkMode
                        ? "border-black/20 text-black"
                        : "border-white/20 text-white"
                    }`}
                  >
                    {item?.animeStudio}
                  </div>
                  <div
                    className={`w-[100px] h-full text-[10px] flex items-center p-2 truncate overflow-x-auto border  ${
                      isDarkMode
                        ? "border-black/20 text-black"
                        : "border-white/20 text-white"
                    }`}
                  >
                    {item?.animeEpisode}
                  </div>
                  <div
                    className={`w-[100px] h-full text-[10px] flex items-center p-2 truncate overflow-x-auto border  ${
                      isDarkMode
                        ? "border-black/20 text-black"
                        : "border-white/20 text-white"
                    }`}
                  >
                    {item?.animeStudio}
                  </div>
                </div>

                <div
                  className={`w-full h-[23px] ${
                    isDarkMode
                      ? "bg-white text-black border-black/20"
                      : "bg-black text-white border-white/20"
                  } border  flex justify-center items-center truncate text-[10px]`}
                >
                  {item?.animeGenre}
                </div>

                <div className={`w-full h-fit flex`}>
                  <img src={`${item?.animeImage}`} alt="" width={"95px"} />

                  <div className={`flex flex-col justify-between w-full h-fit`}>
                    <div
                      className={`overflow-auto w-[225px] h-[117px] text-[10px] pl-2 border ${
                        isDarkMode
                          ? "border-black/20"
                          : "border-white/20 text-white"
                      }`}
                    >
                      {item?.animeDescription
                        ? item?.animeDescription
                        : "Data Not Found"}
                    </div>
                    <div
                      className={`w-[225px] h-[25px] ${
                        isDarkMode
                          ? "bg-white border-black/20 text-black"
                          : "bg-black border-white/20 text-white"
                      } border  flex justify-center items-center truncate text-[10px]`}
                    >
                      {item?.animeDate}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default GenreCards;
