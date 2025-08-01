-- 001_create_schema.sql
-- PostgreSQL Schema for EduDonate
-- Updated: 2025-06-11

-- Drop existing tables if any (for development purposes)
DROP TABLE IF EXISTS item_photos;
DROP TABLE IF EXISTS item_requests;
DROP TABLE IF EXISTS donations;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS schools;
DROP TABLE IF EXISTS item_categories;
DROP TABLE IF EXISTS item_types;
DROP TABLE IF EXISTS item_sizes;

-- Schools table (must be created before users)
CREATE TABLE schools (
    school_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_name TEXT NOT NULL,
    province TEXT NOT NULL,
    city TEXT NOT NULL,
    suburb TEXT,
    street_address TEXT,
    postal_code VARCHAR(10),
    contact_email TEXT UNIQUE CHECK (contact_email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
    contact_number VARCHAR(15)
);

-- Users table
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    contact_email TEXT UNIQUE,
    password TEXT NOT NULL,
    contact_number TEXT,
    role TEXT NOT NULL DEFAULT 'donor',
    associated_school_id UUID REFERENCES schools(school_id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Static category data
CREATE TABLE item_categories (
    category_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_name TEXT UNIQUE NOT NULL
);

-- Static type data
CREATE TABLE item_types (
    type_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type_name TEXT UNIQUE NOT NULL
);

-- Static size data (RSA Sizes)
CREATE TABLE item_sizes (
    size_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    size_label TEXT UNIQUE NOT NULL,
    rsa_size_number INTEGER
);

-- Items available for donation
CREATE TABLE items (
    item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    donor_id UUID REFERENCES users(user_id) ON DELETE SET NULL,
    school_id UUID REFERENCES schools(school_id) ON DELETE SET NULL,
    category_id UUID REFERENCES item_categories(category_id),
    type_id UUID REFERENCES item_types(type_id),
    size_id UUID REFERENCES item_sizes(size_id),
    description TEXT,
    condition TEXT NOT NULL CHECK (condition IN ('New', 'Good', 'Used')),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Photos linked to items
CREATE TABLE item_photos (
    photo_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_id UUID REFERENCES items(item_id) ON DELETE CASCADE,
    photo_path TEXT NOT NULL
);

-- Donation transactions
CREATE TABLE donations (
    donation_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_id UUID REFERENCES items(item_id),
    donated_by UUID REFERENCES users(user_id),
    received_by UUID REFERENCES users(user_id),
    school_id UUID REFERENCES schools(school_id),
    donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Requests made by client
CREATE TABLE item_requests (
    request_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    requester_id UUID REFERENCES users(user_id),
    school_id UUID REFERENCES schools(school_id),
    category_id UUID REFERENCES item_categories(category_id),
    type_id UUID REFERENCES item_types(type_id),
    size_id UUID REFERENCES item_sizes(size_id),
    fulfilled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
