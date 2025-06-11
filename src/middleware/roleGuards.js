import { requireRole } from "./requireRole.js";

//admin only
export const requireAdmin = requireRole(["admin"]);

// school or admin
export const requireSchoolAdmin = requireRole(["school_admin", "admin"]);

//donor only
export const requireDonor = requireRole(["donor"]);