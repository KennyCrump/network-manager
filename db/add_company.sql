INSERT INTO company (user_id, company_name, logo, description, location, website)
VALUES (${user_id}, ${company_name}, ${logo}, ${description}, ${location}, ${website})
RETURNING *;