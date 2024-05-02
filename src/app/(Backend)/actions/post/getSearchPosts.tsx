import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

async function GetSearchPosts({ query }: { query: string }) {
  try {
    const data = await db.posts.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    revalidatePath("/");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default GetSearchPosts;
