import SearchBar from "@/Comp/Commons/SearchBar";
import SideBar from "@/Comp/Commons/SideBar";
import CompleteAnime from "@/Comp/Commons/CompleteAnime";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const GenrePage = () => {
  const urlSamehada = process.env.NEXT_PUBLIC_SAMEHADAKU_TOP;
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<{ img: string; url: string }[]>([]);
  const [title, setTitle] = useState();

  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${urlSamehada}/genre/${slug}`);
        const images = res.data[0]?.img || [];
        const urls = res.data[0]?.url || [];
        const epsdTitle = res.data[0]?.epsd || [];

        setTitle(res.data[0]?.title);

        const combined = images.map((img: string, i: number) => ({
          img,
          url: urls[i] || "",
          title: res.data[0]?.title || "",
          episodeName: epsdTitle[i] || "",
        }));

        setData(combined);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [urlSamehada, slug]);

  return (
    <div className="w-full flex min-h-screen bg-black">
      <SideBar
        home="#b1b3b8"
        JadwalRilis="#b1b3b8"
        OngoingAnime="#b1b3b8"
        GenreList="#ffffff"
      />

      <div className="w-full min-h-screen">
        {data?.length === 0 ? (
          <SkeletonLoader />
        ) : (
          <div className="pt-9">
            <h1 className="text-white text-2xl font-semibold pb-6">
              Genre <span>{title}</span>
            </h1>

            <div className="w-full h-fit flex flex-wrap gap-5">
              {data?.map((item: any, index) => (
                <Link href={`/anime/${item?.episodeName?.title}`}>
                  <div className="text-white bg-black flex flex-col gap-1 w-44 h-fit">
                    <Image
                      src={item?.img?.img}
                      alt=""
                      decoding="async"
                      width={170}
                      height={0}
                      className="rounded-sm"
                      data-nimg="1"
                    />

                    <h1 className="text-white truncate">
                      {item?.episodeName?.title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-white pt-14 pb-24">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => setCount(count - 1)}
                    />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink>{count}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => setCount(count + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        )}
      </div>

      <div className="w-3/8 min-h-screen bg-black pr-13 pt-8">
        <SearchBar />
        <CompleteAnime />
      </div>
    </div>
  );
};

const SkeletonLoader = () => (
  <div className="flex flex-col space-y-3 pt-9">
    <Skeleton className="h-[50px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

export default GenrePage;
