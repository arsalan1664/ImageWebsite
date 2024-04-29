"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import PhotoCard from "./PhotoCard";
import LoadingCard from "./Loading";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Modal({ id }: { id: string }) {
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className=" h-[90%]">
        <Suspense fallback={<LoadingCard />}>
          <PhotoCard id={id} />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
}
