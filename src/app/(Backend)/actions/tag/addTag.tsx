"use server";

import { revalidatePath } from "next/cache";

export async function AddTag(state: any, formData: FormData) {
  const tag = formData.get("tag");
  if (!tag) {
    return;
  }
  const data = { tag };
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.URL + `/api/tags`
      : process.env.NEXT_PUBLIC_VERCEL_URL + `/api/tags`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  const res = await response.json();
  revalidatePath("/", "layout");
  return res;
}
