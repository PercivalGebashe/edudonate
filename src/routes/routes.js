import express from "express"
import { register, login } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registrationSchema } from "../validators/authValidator.js";
import { loginSchema } from "../validators/authValidator.js";
import authenticate from "../middleware/authMiddleware.js";
import { requireAdmin, requireSchoolAdmin, requireDonor } from "../middleware/roleGuards.js";


const router = express.Router();

router.post("/register", validate(registrationSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/donate", authenticate, requireDonor, (req, res) => {
    // will later add logic
    console.log(req.user);
    res.json({
        message: "Testing",
        user: req.user
    });
});

export default router;