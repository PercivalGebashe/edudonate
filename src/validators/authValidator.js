import {z} from "zod";
import { strongPassword } from "./partials/strongPassword";

export const loginSchema = z.object({
    email: z.string().email({message: "Invalid email format"}),
    password: strongPassword,    
});

export const registrationSchema = z.object({
    full_name: z.string().min(1. {message: "Full nume is required"}),
    email: z.string().email({message: "Invalid email format"}),
    password: strongPassword,
    phone_number: z.string().optional(),
});