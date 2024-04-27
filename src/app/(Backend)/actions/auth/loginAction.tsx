"use server";
import { authSchema } from "@/lib/zod";
import { signIn } from "../../api/auth/[...nextauth]/auth";
import { AuthError } from "next-auth";

export async function loginAction(state: any, formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");
    const validatedField = authSchema.safeParse({ username, password });
    if (!validatedField.success) {
      return { error: `Must be 5 or more characters long` };
    }
    //  nextauth authentications
    await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    return { success: "Login successful" };
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw e;
  }
}
