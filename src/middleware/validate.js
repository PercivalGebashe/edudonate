export function validateUser(schema){
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if(!result.success){
            const errors = result.error.format();
            return res.status(400).json({message: "Validation failed", errors});
        }
        req.validatedData = result.data;
        next();
    }
}

export function validateSchool(schema){
    console.log("Validate School");
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if(!result.success){
            const errors = result.error.format();
            return res.status(400).json({message: "Validation failed", errors});
        }
        req.validatedData =result.data;
        next();
    }
}