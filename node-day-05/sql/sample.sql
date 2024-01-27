-- postgresql

-- create user table 1
CREATE TABLE "Users" (
	id SERIAL PRIMARY KEY,
	username VARCHAR(120),
	email TEXT,
	password TEXT
);

-- create user table with unique email and username
CREATE TABLE "Users" (
	id SERIAL PRIMARY KEY,
	username VARCHAR(120) UNIQUE,
	email TEXT UNIQUE,
	password TEXT
);

-- delete / drop user table 1
DROP TABLE "Users";

-- select all users with all columns from user table
SELECT * FROM "Users";

-- select all users with username and email from user table
SELECT username, email FROM "Users";

-- select a user with all columns from user table where id = 4
SELECT * FROM "Users" WHERE id = 4;

-- select top 3 users with all columns from user table
SELECT * FROM "Users" LIMIT 3;

-- select top 3 users with all columns from user table with offset 3
SELECT * FROM "Users" LIMIT 3 OFFSET 3

-- arrange users by id in decsensing order
SELECT * FROM "Users" ORDER BY id DESC;

-- update user with id = 4
-- important: use single quote for string
-- important: use double quote for column name
-- important: use semicolon at the end of query
UPDATE "Users" SET username = 'newusername', email = '123@mail.com' WHERE id = 4;

-- delete user with id = 4
-- important: use determinte clause WHERE to prevent delete all data
DELETE FROM "Users" WHERE id = 4;

-- create table "Todos" with column id, text, status, user_id and set id as primary key and user_id as foreign key from "Users" table id column
CREATE TABLE "Todos" (
    id SERIAL PRIMARY KEY,
    text TEXT,
    status BOOLEAN,
    user_id INTEGER REFERENCES "Users"(id)
);

-- select all todos with all columns from "Todos" table with join "Users" table
SELECT * FROM "Todos" JOIN "Users" ON "Todos".user_id = "Users".id;

-- select text, status and username from "Todos" table with join "Users" table
SELECT "Todos".text, "Todos".status, "Users".username FROM "Todos" JOIN "Users" ON "Todos".user_id = "Users".id;

-- select text, status and username from "Todos" table with join "Users" table where "Users" table id = 8
SELECT
	text,
	status,
	"Users".username,
	"Users".email
FROM
	"Todos"
	JOIN "Users" ON "Todos".user_id = "Users".id
WHERE
	"Users".id = 8

-- count all users
SELECT COUNT(*) FROM "Users";

-- count all users and set alias as "users count"
SELECT COUNT(*) AS "users count" FROM "Users";

-- count all todo group by username
SELECT COUNT(*), "Users".username FROM "Todos" JOIN "Users" ON "Todos".user_id = "Users".id GROUP BY "Users".username;
SELECT COUNT(*), user_id FROM "Todos" GROUP BY user_id;

-- count all todo group by username and create new column "awesome" if count > 2
SELECT
	COUNT(*) AS "Todo counts",
	CASE WHEN COUNT(*) > 2 THEN
		TRUE
	ELSE
		FALSE
	END AS "power_user",
	"Users".username AS "Username"
FROM
	"Todos"
	JOIN "Users" ON "Todos".user_id = "Users".id
GROUP BY
	"Users".username



-- ADDITIONAL
-- create user table 2
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- insert super admin
INSERT INTO users (name, email, password) VALUES ('admin', 'admin@mail.com', 'admin');

-- update super admin
UPDATE users SET name = 'admin', email = 'superadmin@mail.com', password = 'admin' WHERE id = 1;

-- delete super admin
DELETE FROM users WHERE id = 1;

-- insert 3 users using loop
DO $$
DECLARE
  i INT := 0;
BEGIN
    WHILE i < 3 LOOP
        INSERT INTO users (name, email, password) VALUES (md5(random()::text), md5(random()::text), md5(random()::text));
        i := i + 1;
    END LOOP;
    END $$;

-- if else condition
DO $$
DECLARE
  i INT := 0;
BEGIN
    WHILE i < 3 LOOP
        IF i = 0 THEN
            INSERT INTO users (name, email, password) VALUES ('admin', '