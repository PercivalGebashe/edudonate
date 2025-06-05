import {z} from "zod";

export const strongPassword = z
    .string()
    .min(8, {message: "Password must be at least 8 characters characters long"})
    .regex(/[a-z]/, {message: "Password must contain at least 1 lowercase letter"})
    .regex(/[A-Z]/, {message: "Password must contain at least 1 uppercase letter"})
    .regex(/[0-9]/, {message: "Password must contain at least 1 number"})
    .regex(/[^a-zA-Z0-9]/, {message: "Password mustoncontain at least one special character"});