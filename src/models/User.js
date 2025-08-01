import db from '../db/db.js';

export default class User {

  static async create({ full_name, contact_email, contact_number, password, role = 'donor', associated_school_id = null }) {
    const result = await db.query(
      `
      INSERT INTO users (full_name, contact_email, contact_number, password, role, associated_school_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [full_name, contact_email, contact_number, password, role, associated_school_id]
    );
    return result.rows[0];
  }

  static async findByEmail(contact_email) {
    const result = await db.query(
      `
      SELECT * FROM users WHERE contact_email = $1;
      `,
      [contact_email]
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

  static async updateRole(contact_email, role){
    const result = await db.query(
    `
    UPDATE  users
    SET role = $1
    WHERE contact_email = $2;
    `,[role, contact_email]);
    
    return result.rowCount;
  }

  static async updateAssociatedSchoolId(contact_email, school_id){
    const result = await db.query(
      `
      UPDATE users
      SET associated_school_id = $1
      WHERE contact_email = $2
      `,[school_id, contact_email]
    );

    return result.rowCount
  }
}
