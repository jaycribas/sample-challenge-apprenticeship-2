DROP TABLE IF EXISTS albums;
CREATE TABLE albums (
  id SERIAL,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL,
  name VARCHAR(90) NOT NULL,
  email VARCHAR(90) NOT NULL UNIQUE,
  password VARCHAR(120) NOT NULL
);
