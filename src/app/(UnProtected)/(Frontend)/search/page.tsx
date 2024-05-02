import React, { Suspense } from "react";
import { TabCarousel } from "../../_components/TabCarousel";

import Loading from "../photos/[id]/loading";
import GetSearchPosts from "@/app/(Backend)/actions/post/getSearchPosts";
import SearchImages from "../../_components/SearchImages";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query;

  const images = await GetSearchPosts({ query });

  return (
    <div className="mt-24">
      <div className="">
        <Link href={"/"} className="mx-16 border p-3 rounded-full">
          Back
        </Link>
        <h1 className="m-16 mt-8 scroll-m-20 text-4xl font-extrabold lg:text-4xl">
          {" "}
          Result Search:{"  "} <span className="ml-2"> {query}</span>
        </h1>
      </div>
      <Suspense fallback={<Loading />}>
        <SearchImages images={images} />
      </Suspense>
    </div>
  );
}

export default SearchPage;
