import {z} from "zod";
import { strongPassword } from "./partials/strongPassword.js";
import { string } from "zod/v4";

export const loginSchema = z.object({
    contact_email: z.string().email({message: "Invalid email format"}),
    password: strongPassword
});

export const userRegistrationSchema = z.object({
    full_name: z.string().min(1, {message: "Full nume is required"}),
    contact_email: z.string().email({message: "Invalid email format"}),
    password: strongPassword,
    contact_number: z.string().optional(),
    role: z.string().optional(),
    associated_school_id: z.string().optional()
});

export const schoolRegistrationScheema = z.object({
    school_name: z.string().min(1, {message: "School name is required"}),
    province: z.string().min(1, {message: "Province/State is rquired"}),
    city: z.string().min(1, {message: "City is required"}),
    suburb: z.string().min(1, {message: "Suburb is required"}),
    street_address: z.string().min(1, {message: "Street adress is required"}),
    postal_code: z.string().min(4, {message: "Postal code is required"}),
    contact_email: z.string().email({message: "Invalid email format"}),
    contact_number: z.string().min(10, {message: "modbile number is required"})
});

export const adminRoleSchema = z.object({
    contact_email: z.string().email({message: "Invalid email format"}),
    role: z.string({message: "Role is required"})
});


export const requestSchema = z.object({
    requester_id: z.string({message: "Requester I.D is required"}),
    school_id: z.string({message: "School I.D is required"}),
    category_id: z.string({message: "Category Id is required"}),
    type_id: z.string({message: "Type I.D is required"}),
    size_id: z.string().optional()
});