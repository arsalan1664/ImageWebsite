"use server";

import { revalidatePath } from "next/cache";

export async function AddCategory(state: any, formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const meta_title = formData.get("meta-title");
  const meta_description = formData.get("meta-description");
  const cover_image = formData.get("cover-image");
  const section = formData.get("section");
  const data = {
    title,
    description,
    meta_title,
    meta_description,
    cover_image,
    section,
  };

  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/categories`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return;
  }

  const res = await response.json();
  revalidatePath("/", "layout");
  return res;
}
