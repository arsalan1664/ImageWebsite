"use server";
import { revalidatePath } from "next/cache";

export async function EditPost(state: any, formData: FormData) {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/posts`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "PUT",
    body: formData,
  });
  console.log(response.statusText);
  const res = await response.json();
  revalidatePath("/");
  return res;
}
