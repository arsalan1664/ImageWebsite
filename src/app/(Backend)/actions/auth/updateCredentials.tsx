"use server";

import bcrypt from "bcryptjs";
import { auth } from "../../api/auth/[...nextauth]/auth";
import { authSchema } from "@/lib/zod";
import { db } from "@/lib/db";

async function updateAction(state: any, formData: FormData) {
  const session = await auth();

  try {
    const validatedFields = authSchema.safeParse({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    if (!validatedFields.success) return { error: "Must be 5 characters long" };
    const { username, password } = validatedFields.data;
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await db.user.findUnique({
      where: { id: session?.user?.name as string },
    });
    if (!user) return { error: "Admin does not exist" };

    // Compare the hashed password from the form data with the stored password hash
    const isPasswordSame = await bcrypt.compare(password, user.passwordHash);
    if (user.username === username && isPasswordSame) {
      return { info: "Previous credentials cannot be updated." };
    }

    await db.user.update({
      where: { id: session?.user?.name as string },
      data: { username, passwordHash },
    });

    return { success: "Successfully updated credentials." };
  } catch (error) {
    console.error("Failed to update credentials:", error);
    return { error: "Failed to update credentials." };
  }
}

export default updateAction;
