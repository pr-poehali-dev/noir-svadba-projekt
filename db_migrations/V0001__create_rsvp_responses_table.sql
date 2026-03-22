CREATE TABLE rsvp_responses (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    persons INTEGER NOT NULL DEFAULT 1,
    attendance VARCHAR(10) NOT NULL,
    wishes TEXT,
    signature VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);