import { getUserByUsername } from "@/lib/db-util";
import Credentials from "next-auth/providers/credentials";
import { authSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = authSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { username, password } = validatedFields.data;

          const user = await getUserByUsername(username);
          if (!user || !user.passwordHash) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.passwordHash
          );

          if (passwordsMatch) return { id: user.id, name: user.username }; //// returing id in name because returning id in id is not working
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
