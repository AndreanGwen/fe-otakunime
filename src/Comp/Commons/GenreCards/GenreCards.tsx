import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const GenreCards = () => {
  const urlOtakudesu = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const genre = localStorage.getItem("genre");
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios.get(`${urlOtakudesu}/genres/${genre}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  //   console.log(genre);

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
          {data.map((item: any) => {
            return (
              <div className={`w-[320px] h-fit bg-white shadow-md`}>
                <div
                  className={`w-full h-[57px] bg-white pt-3 flex justify-center text-sm font-semibold text-red-400 border border-black/20`}
                >
                  {item?.animeTitle}
                </div>

                <div
                  className={`w-full h-[23px] bg-white flex justify-between`}
                >
                  <div
                    className={`w-[100px] h-full text-[10px] flex items-center p-2 truncate overflow-x-auto border border-black/20`}
                  >
                    {item?.animeStudio}
                  </div>
                  <div
                    className={`w-[100px] h-full text-[10px] flex items-center p-2 truncate overflow-x-auto border border-black/20`}
                  >
                    {item?.animeEpisode}
                  </div>
                  <div
                    className={`w-[100px] h-full text-[10px] flex items-center p-2 truncate overflow-x-auto border border-black/20`}
                  >
                    {item?.animeStudio}
                  </div>
                </div>

                <div
                  className={`w-full h-[23px] bg-white border border-black/20 flex justify-center items-center truncate text-[10px]`}
                >
                  {item?.animeGenre.join(", ")}
                </div>

                <div className={`w-full h-fit flex`}>
                  <img src={`${item?.animeImage}`} alt="" width={"95px"} />

                  <div className={`flex flex-col justify-between w-full h-fit`}>
                    <div
                      className={`overflow-auto w-[225px] h-[117px] text-[10px] pl-2 border border-black/20`}
                    >
                      {item?.animeDescription}
                    </div>
                    <div
                      className={`w-[225px] h-[25px] bg-white border border-black/20 flex justify-center items-center truncate text-[10px]`}
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
