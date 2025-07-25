import ItemRequest from "../models/ItemRequest.js";

export async function makeRequest(req, res) {
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

export async function getRequest(req, res) {
    console.log("Heeeere");
    try {
        const { page, limit, offset } = req.pagination;
        console.log("kcbd:", page, limit, offset);

        const totalItems = await ItemRequest.countAll();
        console.log("kbijb");
        const data = await ItemRequest.getRequest(limit, offset);
        console.log("dvd:", totalItems, limit);

        const totalPages = Math.ceil(totalItems / limit);

        res.status(200).json({
            data,
            pagination: {
                totalItems,
                totalPages,
                limit,
                currentPage: page,
                nextPage: page < totalPages ? page + 1 : null,
                prevPage: page > 1 ? page - 1 : null,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            }
        });
    } catch (error) {
        console.log("error:", error.message)
        res.status(500).json("Internal Server Error");
    }
    
}