
DROP TABLE IF EXISTS connection;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name VARCHAR(50),
hash TEXT,
email VARCHAR(50),
profile_pic TEXT
);

DROP TABLE IF EXISTS connection;
CREATE TABLE connection (
connection_id SERIAL PRIMARY KEY,
user_id INTEGER references users(user_id),
name VARCHAR(50),
company VARCHAR(50),
company_id INTEGER,
relation VARCHAR(400),
email VARCHAR(50),
linkedin VARCHAR(150),
date_added VARCHAR(20)
);
