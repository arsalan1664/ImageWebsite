import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Header from "../../_components/Header";
import { BarChart } from "lucide-react";
import EaseIn from "@/lib/ease_In";
import { GetTag } from "@/app/(Backend)/actions/tag/getTag";
import { GetSection } from "@/app/(Backend)/actions/section/getSection";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";
import { GetPost } from "@/app/(Backend)/actions/post/getPost";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

async function Dashboard() {
  const tag = await GetTag();
  const category = await GetCategory();
  const section = await GetSection();
  const post = await GetPost();
  const CardArray = [
    {
      id: 1,
      title: "Number of Sections",
      number: section.sections?.length || 0,
      color: "bg-gradient-to-tl from-teal-200 to-lime-200  ",
    },

    {
      id: 2,
      title: "Number of Categories",
      number: category.categories?.length || 0,
      color: "bg-gradient-to-tl from-teal-200 to-teal-400",
    },
    {
      id: 3,
      title: "Number of Posts",
      number: post.posts?.length || 0,
      color: "bg-gradient-to-tl from-violet-200 to-pink-200",
    },
    {
      id: 4,
      title: "Number of Tags",
      number: tag.tags?.length || 0,
      color: "bg-gradient-to-tl from-violet-400 to-purple-300",
    },
  ];

  return (
    <>
      <Header title={"Dashboard"} />
      <EaseIn>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {CardArray.map((item) => (
              <Card key={item.id} className={`p-0 ${item.color}`}>
                <CardContent className="p-0">
                  <div className="grid gap-2 p-4">
                    <h2 className="font-semibold text-foreground dark:text-background text-lg">
                      {item.title}
                    </h2>
                    <p className="text-3xl text-foreground dark:text-background flex justify-between items-center ">
                      {item.number}
                      <BarChart className="h-8 w-8 mr-2" />
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </EaseIn>
    </>
  );
}

export default Dashboard;
