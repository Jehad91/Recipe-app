BEGIN;

DROP TABLE IF EXISTS  chefs CASCADE;
DROP TABLE IF EXISTS  recipes CASCADE;

CREATE TABLE chefs(
  id INT PRIMARY KEY,
  chef_name VARCHAR(125) NOT NULL,
  chef_country VARCHAR(125)
);

CREATE TABLE recipes(
  id SERIAL PRIMARY KEY,
  recipe_name VARCHAR(125) NOT NULL,
  ingredients TEXT NOT NULL,
  directions TEXT NOT NULL,
  chefs_id INT REFERENCES chefs(id)
);

INSERT INTO chefs VALUES
(1, 'CZN Burak', 'tur'),
(2, 'Manal Alalem', 'jor'),
(3, 'Abu Julia', 'pse'),
(4, 'Gordon Ramsay', 'gbr'),
(5, 'Nusret Gokce', 'tur'),
(6, 'Bobby Chinn', 'nzl');

INSERT INTO recipes (recipe_name, ingredients, directions, chefs_id) VALUES
('Molokhia',
 '1/2 large chicken (or 1 small about 750 grams) - 1 medium onion (quartered) - 12 pods green cardamom - 1 cinnamon stick - 1 bay leaf - 1 teaspoon salt - 5 cups water - 2 tablespoons extra virgin olive oil - 6 medium cloves garlic - 1 tablespoon ground coriander seeds - 1/2 teaspoon salt - 500 grams fresh molokhia - 2 cups Egyptian short-grain rice - 2 tablespoons ghee (clarified butter) - 1 teaspoonlemon juice',
  'Add the chicken, onions, cardamom, cinnamon, bay leaf salt and water to a stock pot thats just large enough to hold the chicken. The chicken should be completely submerged. Cover and bring to a boil, then remove the lid and skim off any scum that accumulates on the surface. Keep skimming until theres no more foam coming up. Turn the heat down to a simmer, and cook the chicken for 20 minutes.',
   1
);

COMMIT;