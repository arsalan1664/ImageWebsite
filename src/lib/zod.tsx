import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(5, { message: "min 5 character" }),
  password: z.string().min(5, { message: "min 5 character" }),
});
