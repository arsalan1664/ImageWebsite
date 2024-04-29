import React from "react";
import Header from "../../../_components/Header";
import { PostTable } from "./_components/postTable";
import { GetPost } from "@/app/(Backend)/actions/post/getPost";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

async function page() {
  const data = await GetPost();
  return (
    <>
      <Header title={"Posts"} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <PostTable data={data.posts} />
      </main>
    </>
  );
}

export default page;
