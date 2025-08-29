import Genre from "@/Comp/Commons/Genre";
import SearchBar from "@/Comp/Commons/SearchBar";
import SideBar from "@/Comp/Commons/SideBar";
import CompleteAnime from "@/Comp/Commons/CompleteAnime";

import Link from "next/link";

const GenreList = () => {
  return (
    <div className={`w-full flex min-h-screen bg-black`}>
      <SideBar
        home="#b1b3b8"
        JadwalRilis="#b1b3b8"
        OngoingAnime="#b1b3b8"
        GenreList="#ffffff"
      />

      <div className={`w-full min-h-screen`}>
        <div className={`text-white pt-9 text-2xl font-semibold`}>
          <h1>All Genre :</h1>
        </div>

        <div className={`pt-10 flex flex-wrap gap-3 justify-center`}>
          <Genre />
        </div>
      </div>

      <div className="w-3/8 min-h-screen bg-black pr-13 pt-8 ">
        <CompleteAnime />
      </div>
    </div>
  );
};

export default GenreList;
