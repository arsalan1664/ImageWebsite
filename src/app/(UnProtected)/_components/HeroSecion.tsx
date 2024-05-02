import Link from "next/link";
import Animated_Search from "./Animated_Search";
import { Rocket } from "lucide-react";

export default function Component() {
  return (
    <section className="w-full py-6 md:py-12  h-[550px]">
      <div className="container px-4 md:px-6 h-full">
        <div className="flex flex-col items-center justify-center space-y-2 text-center h-full gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Welcome to {process.env.WEBSITE_NAME}
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover the Best Picture and Images
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 ">
            <Animated_Search />
          </div>

          <div className="flex gap-4 ">
            <Link
              href={"/explore"}
              className="flex items-center  border hover:border-purple-600 px-3 py-1 rounded-full"
            >
              <Rocket className="h-4 w-4 mr-2" /> Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
