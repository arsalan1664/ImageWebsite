"use server";

import { revalidatePath } from "next/cache";

export async function DeleteTag(state: any, formData: FormData) {
  const id = formData.get("id");
  if (!id) {
    return;
  }
  const data = { id };
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/tags`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "DELETE",
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
