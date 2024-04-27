"use server";

import { revalidatePath } from "next/cache";

export async function DeleteSection(state: any, formData: FormData) {
  const id = formData.get("id");
  const data = { id };

  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/sections`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
    method: "DELETE",
    body: JSON.stringify(data),
  });
  revalidatePath("/", "layout");
  const res = await response.json();
  return res;
}
