import db from "../db/db.js";

export default class ItemRequest{
    static async create({requester_id, school_id, category_id, type_id, size_id}){
        
        console.log("DAO:", requester_id,
        school_id,
        category_id,
        type_id,
        size_id);

        const result = await db.query(
            `
            INSERT INTO item_requests (
                requester_id,
                school_id,
                category_id,
                type_id,
                size_id
            )
            VALUES ($1,$2,$3,$4,$5)
            RETURNING *;
            `,
            [requester_id, school_id, category_id,type_id,size_id]
        );

        return result.rows[0];
    }
}