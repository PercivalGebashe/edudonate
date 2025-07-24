import express from "express"
import { registerUser, login, registerSchool } from "../controllers/authController.js";
import {updateAssociatedSchoolId, updateRole} from "../controllers/adminController.js";
import { validateUser, validateSchool, validateRole, validateRequestInput } from "../middleware/validate.js";
import { userRegistrationSchema, schoolRegistrationScheema, adminRoleSchema, loginSchema, requestSchema } from "../validators/inputSchema.js";
import authenticate from "../middleware/authMiddleware.js";
import { requireAdmin, requireSchoolAdmin, requireDonor } from "../middleware/roleGuards.js";
import { getSchool } from "../controllers/schoolsControllers.js";
import { MakeRequest } from "../controllers/itemRequest.js";


const router = express.Router();

router.post("/register-user", validateUser(userRegistrationSchema), registerUser);
router.post("/register-school", validateSchool(schoolRegistrationScheema), registerSchool);
router.post("/login", validateUser(loginSchema), login);
router.get("/schools", getSchool);
router.post("/update-role", validateRole(adminRoleSchema), requireAdmin, updateRole);
router.post("/update-school-id", validateRole(adminRoleSchema), requireAdmin, updateAssociatedSchoolId)
router.post("/request", validateRequestInput(requestSchema), requireSchoolAdmin, MakeRequest);
router.post("/donate", authenticate, requireDonor, (req, res) => {
    // will later add logic
    console.log(req.user);
    res.json({
        message: "Testing",
        user: req.user
    });
});

export default router;