import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import SideBar from "@/Comp/Commons/SideBar";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    axios.get(`${urlSamehada}/episode/${slug}`).then((res) => {
      console.log(res.data[0]);
    });
  });

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
      ></div>

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
