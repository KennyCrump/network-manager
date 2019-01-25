INSERT INTO connection (user_id, name, company, relation, email, linkedin, date_added)
VALUES (${user_id}, ${name}, ${company}, ${relation}, ${email}, ${linkedin}, ${dateAdded})
RETURNING *;
