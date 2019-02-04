INSERT INTO company (user_id, company_name, logo, description, location, website, linkedin)
VALUES (${user_id}, ${company_name}, ${logo}, ${description}, ${location}, ${website}, ${linkedin})
RETURNING *;