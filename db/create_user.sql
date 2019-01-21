INSERT INTO users (name, email, hash, profile_pic)
VALUES (${name}, ${email}, ${hash}, ${profile_pic})
RETURNING user_id, name, email, profile_pic;