"use server";

export async function GetTag() {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.URL}/api/tags`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
    method: "GET",
  });

  if (!response.ok) {
    console.log(response);
    return { error: "Bad response" };
  }

  const res = await response.json();
  return res;
}
