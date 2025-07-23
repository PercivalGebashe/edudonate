export function requireRole(allowedRoles = []){
    return (req, res, next) =>{
        if(!req.body.user || !allowedRoles.includes(req.body.user.role)){
            return res.status(403).json({message: "Access denied: Insufficient permissions"});
        }
        next();
    }
}