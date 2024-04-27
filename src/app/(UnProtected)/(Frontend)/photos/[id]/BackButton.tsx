"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className="my-6">
      <ChevronLeft className="w-4 h-4 mr-2" />
      Back
    </Button>
  );
}
