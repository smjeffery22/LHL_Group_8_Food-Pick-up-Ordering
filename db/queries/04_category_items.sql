/* Shows all available drinks on menu*/
SELECT name, description, price
FROM items
WHERE category = 'Drinks';

/* Shows all burgers on menu*/
SELECT name, description, price
FROM items
WHERE category = 'Burgers';

/* Shows all sides on menu*/
SELECT name, description, price
FROM items
WHERE category = 'Sides';



