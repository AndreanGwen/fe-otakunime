import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import { FaNetworkWired } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const Genre = () => {
  const darkModeContext = React.useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;
  const urlOtakudesu = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    axios.get(`${urlOtakudesu}/genre-list`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="w-full h-fit">
      {data.length === 0 ? (
        <div className={`flex pt-4 flex-wrap gap-6`}>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-[150px]" />
            </div>
          </div>
        </div>
      ) : (
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {data.map((item: any) => (
            <Link
              href={`/genres/${item.genre.replaceAll(" ", "-").toLowerCase()}`}
              onClick={() =>
                localStorage.setItem(
                  "genre",
                  item.genre.replaceAll(" ", "-").toLowerCase()
                )
              }
            >
              <ListItem
                sx={{
                  width: "200px",
                  height: "60px",
                  bgcolor: isDarkMode ? "" : "",
                  color: isDarkMode ? "#000000" : "#ffffff",
                }}
                className="shadow-sm"
              >
                <ListItemAvatar>
                  <Avatar>
                    <FaNetworkWired />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.genre}`}
                  className="hover:underline"
                />
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </div>
  );
};
export default Genre;
