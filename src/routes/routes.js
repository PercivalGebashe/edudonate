import express from "express"
import { registerUser, login, registerSchool } from "../controllers/authController.js";
import { validateUser, validateSchool } from "../middleware/validate.js";
import { userRegistrationSchema, schoolRegistrationScheema } from "../validators/authValidator.js";
import { loginSchema } from "../validators/authValidator.js";
import authenticate from "../middleware/authMiddleware.js";
import { requireAdmin, requireSchoolAdmin, requireDonor } from "../middleware/roleGuards.js";


const router = express.Router();

router.post("/register-user", validateUser(userRegistrationSchema), registerUser);
router.post("/register-school", validateSchool(schoolRegistrationScheema), registerSchool);
router.post("/login", validateUser(loginSchema), login);
router.post("/donate", authenticate, requireDonor, (req, res) => {
    // will later add logic
    console.log(req.user);
    res.json({
        message: "Testing",
        user: req.user
    });
});

export default router;