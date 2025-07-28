import ItemDonate from "../models/itemDonate.js";

export async function donate(req, res) {
    const {donor_id, school_id, category_id, type_id, size_id, description, condition} = req.validatedData;

    try {

        const result = await ItemDonate.create({donor_id, school_id, category_id, type_id, size_id, description, condition});

        res.status(201).json({message: "Donation created successfully", donation: result});
        
    } catch (error) {
        console.log("Donation creation error", error);
        res.status(500).json({message: "Internal Server Error"});
    }
    
}