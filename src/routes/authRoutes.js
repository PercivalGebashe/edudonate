import express from "express"
import { register, login } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registrationSchema } from "../validators/authValidator.js";
import { loginSchema } from "../validators/authValidator.js";

const router = express.Router();

router.post("/register", validate(registrationSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;