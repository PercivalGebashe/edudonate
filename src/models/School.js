import db from "../db/db.js";

export default class School{
    static async create({
        school_name,
        province,
        city,
        suburb,
        street_address,
        postal_code,
        contact_email,
        contact_number
        }){
    const result = db.query(
        `
        INSERT INTO schools (
            school_name,
            province,
            city,
            suburb,
            street_address,
            postal_code,
            contact_email,
            contact_number
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
        `,
        [
            school_name,
            province,
            city,
            suburb,
            street_address,
            postal_code,
            contact_email,
            contact_number
        ]
    );

    return result.rows[0];

    };

    static async findByEmail(email) {
    const result = await db.query(
        `
        SELECT * FROM users WHERE email = $1;
        `,
        [email]
    );
    return result.rows[0];
    }

    static async findById(user_id) {
    const result = await db.query(
        `SELECT * FROM users WHERE user_id = $1;`,
        [user_id]
    );
    return result.rows[0];
    }
    
};