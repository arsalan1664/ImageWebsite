"use server";

export async function GetCategory() {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/categories`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  const res = await response.json();
  return res;
}
