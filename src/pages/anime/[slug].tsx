import SideBar from "@/Comp/Commons/SideBar";
import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import Button from "@mui/material/Button";
import Link from "next/link";

const AnimeDetail = () => {
  const urlSamehada = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`${urlSamehada}/anime/${slug}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  const info = data?.[0]?.info;
  const regex =
    /(Judul|Japanese|Skor|Produser|Tipe|Status|Total Episode|Durasi|Tanggal Rilis|Studio|Genre):\s*([^]+?)(?=(Judul|Japanese|Skor|Produser|Tipe|Status|Total Episode|Durasi|Tanggal Rilis|Studio|Genre|$))/g;

  let result: any = {};
  let match;

  while ((match = regex.exec(info)) !== null) {
    result[match[1]] = match[2].trim();
  }

  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  // console.log(slug);

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
          <div className="w-full h-full flex pt-11">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[50px] w-[600px]" />
              <div className="flex gap-2">
                <Skeleton className="h-[240px] w-[170px]" />

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-[20px] w-[300px]" />
                  <Skeleton className="h-[20px] w-[150px]" />
                  <Skeleton className="h-[20px] w-[200px]" />
                  <Skeleton className="h-[20px] w-[500px]" />
                  <Skeleton className="h-[20px] w-[270px]" />
                  <Skeleton className="h-[20px] w-[100px]" />
                  <Skeleton className="h-[20px] w-[400px]" />
                  <Skeleton className="h-[20px] w-[250px]" />
                  <Skeleton className="h-[20px] w-[200px]" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full min-h-screen pt-9 pl-3 pr-10 flex-col gap-10 pb-10">
            <div className="flex items-center">
              <div
                className={`${
                  isDarkMode ? "text-black" : "text-white"
                } flex flex-col gap-4`}
              >
                <h1 className={`text-3xl font-semibold pb-7`}>
                  {data[2]?.titleStreaming.split("Jangan")[0]}
                </h1>

                <div className="flex w-full gap-7 h-full">
                  <div className="">
                    <Image
                      src={data[2]?.image}
                      alt={`animePhoto`}
                      width={200}
                      height={0}
                      className="rounded-md"
                    />
                  </div>

                  <div className={`flex flex-col gap-4 w-full`}>
                    <div
                      className={`${
                        isDarkMode ? "text-black" : "text-white"
                      } text-sm`}
                    >
                      <h1 className={`flex gap-2`}>
                        <strong>Judul :</strong>
                        {result?.Judul}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Japanese :</strong>
                        {result?.Japanese}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Skor :</strong>
                        {result?.Skor}
                      </h1>
                      <h1 className={`flex gap-2 truncate`}>
                        <strong>Produser :</strong>
                        {result?.Produser}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Tipe :</strong>
                        {result?.Tipe}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Status :</strong>
                        {result?.Status}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Total Episode :</strong>
                        {result?.["Total Episode"]}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Durasi :</strong>
                        {result?.Durasi}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Tanggal Rilis :</strong>
                        {result?.["Tanggal Rilis"]}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Studio :</strong>
                        {result?.Studio}
                      </h1>
                      <h1 className={`flex gap-2`}>
                        <strong>Genre :</strong>
                        {result?.Genre}
                      </h1>
                    </div>
                    <div
                      className={`${
                        isDarkMode ? "text-black" : "text-white"
                      } font-light flex-1 h-[400px] overflow-auto`}
                    >
                      <p className={``}>{data[1]?.desc}</p>
                    </div>
                  </div>
                </div>

                <div className={`w-full flex flex-wrap gap-3 `}>
                  {data[2]?.episodes?.map((item: any, index: number) => {
                    const urlArray = item.split("/episode/")[1];

                    return (
                      <Link
                        href={`/episode/${urlArray}`}
                        onClick={() =>
                          localStorage.setItem("title", slug as string)
                        }
                      >
                        <Button color="primary" size="small">
                          {urlArray}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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

export default AnimeDetail;
