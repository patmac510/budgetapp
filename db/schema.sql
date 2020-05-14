DROP DATABASE IF EXISTS budgetapp;

CREATE DATABASE budgetapp;

\c budgetapp;

CREATE SCHEMA budget;

CREATE TABLE budget.profile (
  user_name text,
  user_id serial NOT NULL,
  income int,
  budget int,
  spending int,
  month text,
  year int,
  PRIMARY KEY (user_id)
);

CREATE TABLE budget.categories (
  category_name text,
  category_id serial NOT NULL,
  color text,
  user_id int,
  total_amount int,
  current_amount int,
  PRIMARY KEY (category_id),
  FOREIGN KEY (user_id) REFERENCES budget.profile (user_id),
  UNIQUE (category_name)
);

CREATE TABLE budget.transactions (
  transaction_name text,
  transaction_id serial NOT NULL,
  category_name text,
  amount int,
  transaction_date bigint,
  user_id int,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (user_id) REFERENCES budget.profile (user_id),
  FOREIGN KEY (category_name) REFERENCES budget.categories (category_name)
);

CREATE INDEX category_index ON budget.transactions (category_name);

INSERT INTO budget.profile (user_name, income, budget, spending, month, year) VALUES ('John', 6000, 4000, 0, 'April', 2020);

INSERT INTO budget.categories (category_name, color, user_id, total_amount, current_amount) VALUES ('Other', 'red', 1, 4000, 0);

INSERT INTO budget.transactions (transaction_name, category_name, amount, transaction_date, user_id) VALUES ('Gas', 'Other', 100, 1587489969532, 1);
INSERT INTO budget.transactions (transaction_name, category_name, amount, transaction_date, user_id) VALUES ('McDonalds', 'Other', 200, 1587489969532, 1);
INSERT INTO budget.transactions (transaction_name, category_name, amount, transaction_date, user_id) VALUES ('rent', 'Other', 2000, 1587489969532, 1);

