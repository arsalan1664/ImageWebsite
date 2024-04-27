"use server";

import Image from "next/image";
import { Copy, Download } from "lucide-react";
import { db } from "@/lib/db";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// export default async function PhotoCard({ id }: { id: string }) {
//   const data = await db.posts.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       postTags: {
//         include: {
//           tag: true,
//         },
//       },
//     },
//   });
//   const tags: string[] = [];
//   const imageUrl = data?.imageUrl as string;
//   data?.postTags.forEach((item: { tag: { title: string } }) => {
//     const title = item.tag.title;
//     tags.push(title);
//   });

//   return (
//     <div className=" grid md:grid-cols-1 gap-6 lg:gap-12 ">
//       <div className="grid gap-4 md:gap-10 items-start">
//         <Image
//           alt="Images"
//           className=" object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
//           height={300}
//           src={imageUrl}
//           width={500}
//         />
//       </div>
//       <div className="grid gap-4 md:gap-10 items-start ">
//         <div className="grid gap-2">
//           <h1 className="font-bold text-3xl lg:text-4xl">{data?.title}</h1>
//           <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-8">
//             {data?.description}
//           </p>
//           <Button size="lg">
//             <Download className="mr-4" /> Download
//           </Button>
//           <div className="flex items-center gap-2">
//             <Input
//               className="flex-1"
//               placeholder="Share link"
//               defaultValue="http://localhost:3000/photos/165fa6f9-6aee-43ef-8b8a-fbcd1f8848c8"
//               readOnly
//               type="text"
//             />
//             <Button size="sm" variant="outline">
//               <Copy className="w-4 h-4 mr-2" />
//               Copy
//             </Button>
//           </div>
//         </div>
//         <div className="grid gap-4 ">
//           <div className=" h-auto max-w-[36rem] space-y-4">
//             <h1 className="font-semibold text-xs">Tags</h1>
//             <div className="grid grid-cols-3 sm:grid-cols-5  items-center gap-2 w-full ">
//               {tags?.map((item, i) => (
//                 <h4 key={i} className="bg-secondary p-2 rounded-xl text-xs">
//                   {item}
//                 </h4>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default async function PhotoCard({ id }: { id: string }) {
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
}
