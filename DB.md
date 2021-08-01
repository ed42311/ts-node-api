# DB

https://www.taniarascia.com/node-express-postgresql-heroku/#set-up-postgresql-database

## mac

brew install postgres

## Local

```
❯ psql postgres
postgres=# CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
CREATE ROLE
postgres=# ALTER ROLE api_user CREATEDB;
ALTER ROLE
postgres=# \q

❯ psql -d postgres -U api_user
postgres=> CREATE DATABASE shop_api;
CREATE DATABASE
shop_api=> CREATE TABLE products (
ID SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price INTEGER
);
CREATE TABLE
shop_api=> INSERT INTO products (name, price)
VALUES ('Horsey Saddle', 5000);
INSERT 0 1
```

## Docker container

## Resources

[heroku node posgres self signed certificate](https://stackoverflow.com/questions/61097695/self-signed-certificate-error-during-query-the-heroku-hosted-postgres-database)
