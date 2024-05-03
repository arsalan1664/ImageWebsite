import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Loader2 className="mr-2 animate-spin" />
      Loading ..
    </div>
  );
}

export default Loading;
