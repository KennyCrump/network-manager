INSERT INTO connection (user_id, first_name, last_name, company, position, relation, email, linkedin, date_added)
VALUES (${user_id}, ${first_name}, ${last_name}, ${company}, ${position}, ${relation}, ${email}, ${linkedin}, ${dateAdded});
SELECT * FROM connection 
WHERE user_id = ${user_id};

