// src/models/User.js
import db from '../db/db.js';

export default class User {
  static async create({ full_name, email, phone_number, is_admin = false, associated_school_id = null, password}) {
    const result = await db.query(
      `
      INSERT INTO users (full_name, email, phone_number, is_admin, associated_school_id, password)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [full_name, email, phone_number, is_admin, associated_school_id, password]
    );
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await db.query(
      `SELECT * FROM users WHERE email = $1;`,
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
}
