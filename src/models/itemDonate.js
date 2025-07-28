import db from "../db/db.js";

export default class ItemDonate{

    static async create({donor_id,
    school_id,
    category_id,
    type_id,
    size_id,
    description,
    condition,
    }){

        const result = await db.query(
        `
            INSERT INTO items (
                donor_id,
                school_id,
                category_id,
                type_id,
                size_id,
                description,
                condition
            )
            VALUES ($1,$2,$3,$4,$5,$6,$7);
            `,[donor_id, school_id, category_id, type_id, size_id, description, condition]
        );
        return result.rows[0];
    }

    static async getDonation(limit, offset){
        const result = await db.query(
            "SELECT * FROM items ORDER by created _at DESC LIMit $1 OFFSET $2",[limit, offset]
        );
        return result.rows[0];
    }

    static async countAll(){
        const result =  await db.query("SELECT COUNT(*) AS count FROM items",);
        return result.rows[0].count;
    }
}