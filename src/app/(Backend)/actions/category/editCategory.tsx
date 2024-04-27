"use server";

import { revalidatePath } from "next/cache";

export async function EditCategory(state: any, formData: FormData) {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/categories`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "PUT",
    body: formData,
  });

  const res = await response.json();
  revalidatePath("/", "layout");
  return res;
}
