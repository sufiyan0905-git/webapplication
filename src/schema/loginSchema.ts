import { z } from "zod";

export const loginSchema = z.object({
    email: z.email({
        error: "Please enter a valid email address",
    }),
    password: z.string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
})

export type LoginFormValues = z.infer<typeof loginSchema>