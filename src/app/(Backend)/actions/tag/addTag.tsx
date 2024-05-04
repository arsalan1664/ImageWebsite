"use server";

import { revalidatePath } from "next/cache";

export async function AddTag(state: any, formData: FormData) {
  const tag = formData.get("tag");
  if (!tag) {
    return;
  }
  const data = { tag };
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/tags`;

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log(response);
    return { error: "Bad response" };
  }
  const res = await response.json();
  revalidatePath("/", "layout");
  return res;
}
