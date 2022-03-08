BEGIN;

DROP TABLE IF EXISTS  recipes CASCADE;

CREATE TABLE recipes(
  id SERIAL PRIMARY KEY,
  recipe_name VARCHAR(125) NOT NULL,
  ingredients TEXT NOT NULL,
  directions TEXT NOT NULL
);

INSERT INTO recipes (recipe_name, ingredients, directions) VALUES
('Tea', 'Sugar - Tea Table - Water', 'Add tea table and suger to water');

COMMIT;