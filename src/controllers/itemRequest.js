import ItemRequest from "../models/ItemRequest.js";

export async function MakeRequest(req, res) {
    const {
        requester_id,
        school_id,
        category_id,
        type_id,
        size_id
    } = req.validatedData;

    try {

        console.log("Controller:", requester_id,
        school_id,
        category_id,
        type_id,
        size_id);

        const result = await ItemRequest.create({requester_id, school_id, category_id, type_id, size_id});

        res.status(201).json({message: "Request created sucessfully", request: result});
        
    } catch (error) {
        console.log("Request creation error", error);
        res.status(500).json({message: "Server error during request creation."});
        
    }
}