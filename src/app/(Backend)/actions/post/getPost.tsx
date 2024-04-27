"use server";

export async function GetPost() {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/posts`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
    method: "GET",
  });

  const res = await response.json();
  return res;
}
