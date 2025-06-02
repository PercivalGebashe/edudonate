-- Udating user table to include password
-- Created: 2025-06-02

ALTER TABLE users
ADD COLUMN password TEXT NOT NULL;