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

    static async getRequest(limit, offset){
        const result = await db.query(
            "SELECT * FROM item_requests ORDER BY created_at DESC LIMIT $1 OFFSET $2",
            [limit, offset]
        );

        return result.rows[0];
    }

    static async countAll(){

        const result = await db.query("SELECT COUNT(*) AS count FROM item_requests");
        console.log(result);
        return result.rows[0].count;
    }
}