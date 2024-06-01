import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db";
import BackButton from "./BackButton";
import Image from "next/image";

export async function generateStaticParams() {
  const Posts = await db.posts.findMany();
  return Posts?.map((item: any) => ({
    id: item.id,
  }));
}

async function Page({ params }: { params: any }) {
  const data = await db.posts.findUnique({
    where: {
      id: params.id,
    },
    include: {
      postTags: {
        include: {
          tag: true,
        },
      },
    },
  });
  const tags: string[] = [];
  const imageUrl = data?.imageUrl as string;
  data?.postTags.forEach((item: any) => {
    const title = item.tag?.title as string;
    tags.push(title);
  });
  return (
    <div className="min-h-screen my-16 items-start max-w-6xl px-4 mx-auto py-6">
      <BackButton />
      <div className=" grid md:grid-cols-2 gap-6 lg:gap-12 ">
        <div className="grid gap-4 md:gap-10 items-start">
          <Image
            alt="Images"
            className=" object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={300}
            src={imageUrl}
            width={500}
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start ">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">{data?.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-8">
              {data?.description}
            </p>
            <Button size="lg">
              <Download className="mr-4" /> Download
            </Button>
            <div className="flex items-center gap-2">
              <Input
                className="flex-1"
                placeholder="Share link"
                defaultValue="http://localhost:3000/photos/165fa6f9-6aee-43ef-8b8a-fbcd1f8848c8"
                readOnly
                type="text"
              />
              <Button size="sm" variant="outline">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>
          <div className="grid gap-4 ">
            <div className=" h-auto max-w-[36rem] space-y-4">
              <h1 className="font-semibold text-xs">Tags</h1>
              <div className="grid grid-cols-3 sm:grid-cols-5  items-center gap-2 w-full ">
                {tags?.map((item, i) => (
                  <h4 key={i} className="bg-secondary p-2 rounded-xl text-xs">
                    {item}
                  </h4>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

type tagType = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  categoriesId: string | null;
  postTags: postTags[];
  createdAt: Date;
  updatedAt: Date;
};

type postTags = {
  id: string;
  title: string;
};
