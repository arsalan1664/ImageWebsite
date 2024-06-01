import { db } from "@/lib/db";
import Images from "../../../_components/Images";
import Image from "next/image";

export async function generateStaticParams() {
  const categories = await db.categories.findMany();
  return categories?.map((item: any) => ({
    id: item.id,
  }));
}

export default async function Category({ params }: { params: { id: string } }) {
  const id = params.id;

  const categories = await db.categories.findUnique({
    where: {
      id,
    },
    include: {
      posts: true,
    },
  });
  const imageUrl = categories?.imageUrl as string;

  return (
    <div className="">
      <div className="relative">
        <Image
          alt="3D Renders"
          className="w-full"
          height="500"
          src={imageUrl}
          style={{
            aspectRatio: "1366/500",
            objectFit: "cover",
          }}
          width="1366"
        />
        <div className="absolute bottom-0 top-18 left-0 right-0 bg-black bg-opacity-50 p-20">
          <h1 className="text-4xl font-bold text-white">{categories?.title}</h1>
          <p className="mt-2 text-lg text-white">{categories?.description}</p>
        </div>
      </div>
      {/* <div className="container mx-auto grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2">
          <Image
            alt="Advertise on Unsplash"
            className="w-full"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "900/300",
              objectFit: "cover",
            }}
            width="900"
          />
        </div>
        <div></div>
      </div> */}
      <Images images={categories} />
    </div>
  );
}
