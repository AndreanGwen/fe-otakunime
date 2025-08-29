import SideBar from "@/Comp/Commons/SideBar";
import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@/components/ui/skeleton";

const OngoingAnime = () => {
  const urlSamehada = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = axios.get(`${urlSamehada}/page/ongoing-anime`).then((res) => {
      setData(res.data?.dataAnime);
    });
  }, []);

  return (
    <div className={`flex w-full bg-black`}>
      <SideBar
        home="#b1b3b8"
        JadwalRilis="#b1b3b8"
        OngoingAnime="#ffffff"
        GenreList="#b1b3b8"
      />

      <div className="w-full h-fit pb-20">
        <div className={`text-white pt-9 text-2xl font-semibold pb-10`}>
          <h1>OnGoing Anime Page</h1>
        </div>

        {data.length === 0 ? (
          <div className="flex items-center flex-wrap gap-4">
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
            <Skeleton className="h-[237px] w-[180px]" />
          </div>
        ) : (
          <div className={`w-full flex flex-wrap gap-3`}>
            {data.map((item: any, index: any) => {
              const link = item?.title.toLowerCase().replace(/ /g, "-");
              return (
                <Card
                  sx={{
                    maxWidth: 180,
                    width: 180,
                    backgroundColor: "#262626",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia sx={{ height: 120 }} image={item?.img} title="" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ color: "white" }}
                      className="truncate"
                    >
                      {item?.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        window.location.href = `/anime/${link}`;
                      }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      <div className="w-3/8 min-h-screen bg-black pr-13 pt-8">
        <CompleteAnime />
      </div>
    </div>
  );
};

export default OngoingAnime;
