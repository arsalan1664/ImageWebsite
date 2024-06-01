import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";

export async function TabCarousel() {
  const { categories } = await GetCategory();
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="max-w-screen-lg mx-auto my-2"
    >
      <CarouselContent>
        {categories?.map((item: any) => (
          <CarouselItem key={item.id} className="basis-1/3 lg:basis-1/6">
            <div className="">
              <Link
                href={`/c/${item.id}`}
                className="flex items-center  border hover:border-purple-600 px-3 py-1 rounded-full"
              >
                <span className="text-center mx-auto">{item.title}</span>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
