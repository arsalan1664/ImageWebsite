"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Categories({ data }: { data: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const router = useRouter();
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "center",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {data.map((item: any) => (
          <CarouselItem
            onClick={() => router.push(`/c/${item.id}`)}
            key={item.id}
            className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
          >
            <div className="p-1">
              <div className="group relative">
                <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <Image
                    alt="Backgrounds"
                    className="w-full h-full object-center object-cover"
                    height="256"
                    src={item.imageUrl}
                    style={{
                      aspectRatio: "384/256",
                      objectFit: "cover",
                    }}
                    width="384"
                  />
                </div>
                <h4 className="mt-4 text-lg leading-6 font-medium text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1 text-base leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
