"use server";
import Image from "next/image";
import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function PhotoCard({ id }: { id: string }) {
  try {
    const data = await db.posts.findUnique({
      where: {
        id,
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
      const title = item.tag.title;
      tags.push(title);
    });

    return (
      <div className="absolute p-6 pb-2 h-full flex flex-col rounded-xl bg-background bg-clip-bordershadow-md">
        <div className="h-72 overflow-hidden rounded-xl bg-background bg-clip-border ">
          <Image
            width={500}
            height={500}
            src={imageUrl}
            className="h-full w-full object-cover"
            alt={data?.title || "image"}
          />
        </div>
        <div className="p-6 pb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed antialiased">
              {data?.title}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed  antialiased"></p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal  antialiased opacity-75">
            {data?.description}
          </p>
        </div>
        <div className="p-6 ">
          <div className="gap-2 grid grid-cols-5 font-sans text-sm font-normal leading-normal  antialiased opacity-75">
            {tags.map((item, i) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>

        <div className="p-6  mt-auto">
          <Button className="block w-full select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Download
          </Button>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return;
  }
}
