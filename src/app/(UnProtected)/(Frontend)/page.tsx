import React, { Suspense } from "react";
import HeroSection from "../_components/HeroSecion";
import Images from "../_components/Images";
import { GetPost } from "@/app/(Backend)/actions/post/getPost";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2Icon } from "lucide-react";
import { TabCarousel } from "../_components/TabCarousel";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

async function Home() {
  const images = await GetPost();

  return (
    <>
      <HeroSection />
      <TabCarousel />
      <Suspense fallback={<Loading />}>
        <Images images={images} />
      </Suspense>
    </>
  );
}

export default Home;

function Loading() {
  return (
    <>
      <div className="p-5 md:p-10 ">
        <div className=" columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {[1, 2, 3, 4].map((item, i) => (
            <Skeleton key={i} className="h-[200px] w-[300px]" />
          ))}
        </div>
      </div>
      <Loader2Icon size={30} className="m-8 animate-spin mx-auto" />
    </>
  );
}
