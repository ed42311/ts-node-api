CREATE TABLE products (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER
);

INSERT INTO products (name, price)
VALUES ('Horsey Saddle', 5000);