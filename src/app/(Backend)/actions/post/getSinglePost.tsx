"use server";
import { db } from "@/lib/db";

export default async function GetSinglePost({ id }: { id: string }) {
  const data = await db.posts.findUnique({
    where: {
      id,
    },
    include: {
      postTags: {
        include: {
          tag: true,
        },
      },
    },
  });
  return data;
}
