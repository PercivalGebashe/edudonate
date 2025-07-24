-- Seed: item_categories
INSERT INTO item_categories (category_name) VALUES
('Clothing'),
('Stationery'),
('Footwear'),
('Bags'),
('Books');

-- Seed: item_types
INSERT INTO item_types (type_name) VALUES
('Shirt'),
('Pants'),
('Backpack'),
('Notebook'),
('Textbook'),
('Sneakers');

-- Seed: item_sizes
INSERT INTO item_sizes (size_label, rsa_size_number) VALUES
('Small', 28),
('Medium', 32),
('Large', 36),
('Extra Large', 40);

-- Seed: schools
INSERT INTO schools (school_name, province, city, suburb, street_address, postal_code, contact_email, contact_number)
VALUES 
('Ubuntu Primary School', 'Gauteng', 'Johannesburg', 'Soweto', '123 Freedom St', '1868', 'ubuntu@school.co.za', '0111234567'),
('Naledi High School', 'Western Cape', 'Cape Town', 'Mitchells Plain', '456 Hope Ave', '7785', 'naledi@school.co.za', '0219876543');

-- Seed: users
-- Admin user
INSERT INTO users (full_name, contact_email, password, role)
VALUES ('Admin User', 'admin@edudonate.org', 'hashedpassword123', 'admin');

-- Client (requester)
INSERT INTO users (full_name, contact_email, password, role, associated_school_id)
VALUES ('Lebo Mokoena', 'lebo@ubuntu.org', 'hashedpassword123', 'client',
        (SELECT school_id FROM schools WHERE school_name = 'Ubuntu Primary School'));

-- Donor
INSERT INTO users (full_name, contact_email, password, role)
VALUES ('Thabo Dlamini', 'thabo@donor.org', 'hashedpassword123', 'donor');

-- Seed: sample item request
INSERT INTO item_requests (
    requester_id,
    school_id,
    category_id,
    type_id,
    size_id
)
VALUES (
    (SELECT user_id FROM users WHERE full_name = 'Lebo Mokoena'),
    (SELECT school_id FROM schools WHERE school_name = 'Ubuntu Primary School'),
    (SELECT category_id FROM item_categories WHERE category_name = 'Bags'),
    (SELECT type_id FROM item_types WHERE type_name = 'Backpack'),
    (SELECT size_id FROM item_sizes WHERE size_label = 'Medium')
);
