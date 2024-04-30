"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2Icon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { TabCarousel } from "./TabCarousel";

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
    <div className="p-5 md:p-10">
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-5  space-y-5 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images?.posts.map(
          (item: {
            title: string;
            description: string;
            id: string;
            imageUrl: string;
          }) => (
            <div
              onClick={() => router.push(`/photos/${item.id}`)}
              className=" overflow-hidden   bg-background cursor-pointer rounded-xl relative group"
            >
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                    <div className="font-bold">{item.title}</div>

                    <div className="opacity-60 text-sm ">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
              <Image
                width={500}
                height={500}
                alt="Image"
                className="object-cover w-full  group-hover:scale-110 transition duration-300 ease-in-out"
                src={item.imageUrl}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Images;

// function Images({ images }: { images: any }) {
//   return (
//     <div className="p-5 md:p-10">
//       <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8  lg:space-y-7 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
//         {images?.posts.map(
//           (item: {
//             title: string;
//             description: string;
//             id: string;
//             imageUrl: string;
//           }) => (
//             <div className=" overflow-hidden   bg-background cursor-pointer rounded-xl relative group">
//               <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
//                 <div>
//                   <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
//                     <div className="font-bold">{item.title}</div>

//                     <div className="opacity-60 text-sm ">
//                       {item.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Image
//                 width={500}
//                 height={500}
//                 alt="Image"
//                 className="object-cover w-full  group-hover:scale-110 transition duration-300 ease-in-out"
//                 src={item.imageUrl}
//                 onClick={() => router.push(`/photos/${item.id}`)}
//               />
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// }
