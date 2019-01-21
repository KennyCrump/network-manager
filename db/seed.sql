DROP TABLE IF EXISTS users;
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name VARCHAR(50),
hash TEXT,
email VARCHAR(50),
profile_pic TEXT
);

