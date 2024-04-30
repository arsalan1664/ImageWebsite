import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <div className=" p-6 pb-2 h-full flex flex-col rounded-xl bg-background bg-clip-bordershadow-md">
      <div className="h-72 overflow-hidden rounded-xl bg-background bg-clip-border">
        <Skeleton className="h-full " />
      </div>
      <div className="p-6 pb-2">
        <div className="mb-2 flex items-center justify-between">
          <Skeleton className="h-5 w-full" />
        </div>
        <Skeleton className="h-5 w-full" />
      </div>
      <div className="p-6 py-3">
        <div className="gap-2 grid grid-cols-5 font-sans text-sm font-normal leading-normal antialiased opacity-75">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
      <div className="p-6  mt-auto">
        <Skeleton className="h-10 w-full rounded-full" />
      </div>
    </div>
  );
};

export default LoadingCard;
