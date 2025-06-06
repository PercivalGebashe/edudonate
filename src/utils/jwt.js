import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "JWT TOKEN";

export function signToken(payload){
    return jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"});
}

export function verifyToken(token){
    return jwt.verify(token, JWT_SECRET);
}