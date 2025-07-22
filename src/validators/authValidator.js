import {z} from "zod";
import { strongPassword } from "./partials/strongPassword.js";
import { string } from "zod/v4";

export const loginSchema = z.object({
    contact_email: z.string().email({message: "Invalid email format"}),
    password: strongPassword,    
});

export const userRegistrationSchema = z.object({
    full_name: z.string().min(1, {message: "Full nume is required"}),
    contact_email: z.string().email({message: "Invalid email format"}),
    password: strongPassword,
    contact_number: z.string().optional(),
});

export const schoolRegistrationScheema = z.object({
    school_name: z.string().min(1, {message: "School name is required"}),
    province: z.string().min(1, {message: "Province/State is rquired"}),
    city: z.string().min(1, {message: "City is required"}),
    suburb: z.string().min(1, {message: "Suburb is required"}),
    street_address: z.string().min(1, {message: "Street adress is required"}),
    postal_code: z.string().min(4, {message: "Postal code is required"}),
    contact_email: z.string().email({message: "Invalid email format"}),
    contact_number: z.string().min(10, {message: "modbile number is required"}),  
});