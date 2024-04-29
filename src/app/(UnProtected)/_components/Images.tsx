"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Images({ images }: { images: any }) {
  const router = useRouter();
  // const images = await GetPost();
  // const images = [
  //   "https://source.unsplash.com/ztpUS4N1xhY",
  //   "https://source.unsplash.com/mPFSPqZOO7s",
  //   "https://source.unsplash.com/uPEnxrdSKIw",
  //   "https://source.unsplash.com/hFKZ5-OT9Ys",
  //   "https://source.unsplash.com/xoTt2fjs7d0",
  //   "https://source.unsplash.com/Vc2dD4l57og",
  //   "https://source.unsplash.com/hqnQWmIt3cY",
  //   "https://source.unsplash.com/NTGg2rtWDwg",
  //   "https://source.unsplash.com/uyX3qAQhZVA",
  //   "https://source.unsplash.com/LV-NvIcA-Gg",
  //   "https://source.unsplash.com/0qnRfgnZIsI",
  //   "https://source.unsplash.com/mpwF3Mv2UaU",
  //   "https://source.unsplash.com/gfMWhkDCwYM",
  //   "https://source.unsplash.com/8KtqjrskUg8",
  //   "https://source.unsplash.com/qAaGXj-AOv4",
  // ];
  return (
    <div className="p-5 md:p-10 ">
      <div className=" columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images?.posts.map(
          (item: { id: string; imageUrl: string | StaticImport }) => (
            <Image
              key={item.id}
              src={item.imageUrl}
              width={500}
              height={500}
              alt="Images"
              className="rounded-xl drop-shadow-2xl"
              onClick={() => router.push(`/photos/${item.id}`)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Images;
