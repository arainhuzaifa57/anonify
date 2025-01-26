import { z } from "zod";

export const signInSchema = z.object({
  identify: z.string(),
  password: z.string(),
});
