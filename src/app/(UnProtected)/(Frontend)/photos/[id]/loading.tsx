import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <div className="min-h-screen my-16 items-start max-w-6xl px-4 mx-auto py-6">
      <Skeleton className="h-10 w-24 mb-8" />
      <div className=" grid md:grid-cols-2 gap-6 lg:gap-12 ">
        <div className="grid gap-4 md:gap-10 items-start">
          <Skeleton className="h-[500px] w-[500px]" />
        </div>
        <div className="grid gap-4 md:gap-10 items-start ">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">
              <Skeleton className="h-10 w-full" />
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-8">
              <Skeleton className="h-10 w-full" />
            </p>
            <Skeleton className="h-10 w-full" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
          <div className="grid gap-4 ">
            <div className=" h-auto max-w-[36rem] space-y-4">
              <h1 className="font-semibold text-xs">
                <Skeleton className="h-8 w-full" />
              </h1>
              <div className="grid grid-cols-3 sm:grid-cols-5  items-center gap-2 w-full ">
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
