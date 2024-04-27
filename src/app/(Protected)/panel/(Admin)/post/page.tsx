import React from "react";
import Header from "../../../_components/Header";
import { PostTable } from "./_components/postTable";
import { GetPost } from "@/app/(Backend)/actions/post/getPost";

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
