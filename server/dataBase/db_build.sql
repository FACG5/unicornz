BEGIN ;
DROP TABLE IF EXISTS girl, company, work_experience, school, registeration CASCADE;

CREATE TABLE school (
id SERIAL PRIMARY KEY,
name VARCHAR(255)
);

CREATE TABLE girl (
id SERIAL PRIMARY KEY,
user_name VARCHAR(50) NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR NOT NULL,
school_id INTEGER REFERENCES school(id) ON DELETE CASCADE,
birthDate DATE,
password TEXT
);

CREATE TABLE company (
id SERIAL PRIMARY KEY,
logo TEXT,
company_name VARCHAR,
description TEXT,
mobile VARCHAR,
website VARCHAR,
email VARCHAR,
facebook VARCHAR
);

CREATE TABLE work_experience (
id SERIAL PRIMARY KEY,
company_id INTEGER REFERENCES company(id) ON DELETE CASCADE,
location VARCHAR(50),
subject VARCHAR(50),
post_code INTEGER,
start_date DATE,
end_date DATE,
pocket_money INTEGER,
title VARCHAR,
max_number INTEGER,
description TEXT,
video TEXT,
start_time VARCHAR,
end_time VARCHAR
);

CREATE TABLE registeration (
id SERIAL PRIMARY KEY,
work_experience_id INTEGER REFERENCES work_experience(id) ON DELETE CASCADE,
girl_id INTEGER REFERENCES girl(id) ON DELETE CASCADE,
accepted BOOLEAN
);

COMMIT;