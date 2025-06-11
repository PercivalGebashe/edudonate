import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export function signToken({ user_id, role }) {
  return jwt.sign(
    { userId: user_id, role }, // include both user ID and role
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
