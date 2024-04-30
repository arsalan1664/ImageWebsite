import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GetSinglePost from "@/app/(Backend)/actions/post/getSinglePost";

export default async function PhotoCard({ id }: { id: string }) {
  const data = await GetSinglePost({ id });

  const tags: string[] = [];
  const imageUrl = data?.imageUrl as string;
  data?.postTags.forEach((item: any) => {
    const title = item.tag.title;
    tags.push(title);
  });

  const handleClick = async () => {
    try {
      const fileUrl = `${imageUrl}`;

      // Fetch file content from the server
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      // Read file content as blob
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); // Use blob URL
      link.setAttribute("download", imageUrl);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

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
        <Button
          onClick={handleClick}
          className="block w-full select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Download
        </Button>
      </div>
    </div>
  );
}
