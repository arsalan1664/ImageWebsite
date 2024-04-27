"use server";

import { signOut } from "../../api/auth/[...nextauth]/auth";

export default async function logoutAction() {
  try {
    await signOut({ redirect: false });
    return { success: "Logout successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Logout Failed" };
  }
}
