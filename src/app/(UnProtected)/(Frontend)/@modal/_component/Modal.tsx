"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import PhotoCard from "./PhotoCard";
import LoadingCard from "./Loading";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Modal({ id }: { id: string }) {
  const router = useRouter();
  const images = [
    "https://source.unsplash.com/ztpUS4N1xhY",
    "https://source.unsplash.com/mPFSPqZOO7s",
    "https://source.unsplash.com/uPEnxrdSKIw",
    "https://source.unsplash.com/hFKZ5-OT9Ys",
    "https://source.unsplash.com/xoTt2fjs7d0",
    "https://source.unsplash.com/Vc2dD4l57og",
    "https://source.unsplash.com/hqnQWmIt3cY",
    "https://source.unsplash.com/NTGg2rtWDwg",
    "https://source.unsplash.com/uyX3qAQhZVA",
    "https://source.unsplash.com/LV-NvIcA-Gg",
    "https://source.unsplash.com/0qnRfgnZIsI",
    "https://source.unsplash.com/mpwF3Mv2UaU",
    "https://source.unsplash.com/gfMWhkDCwYM",
    "https://source.unsplash.com/8KtqjrskUg8",
    "https://source.unsplash.com/qAaGXj-AOv4",
  ];
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
