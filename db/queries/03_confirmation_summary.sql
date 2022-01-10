/* Shows confirmation # and summary of order */
SELECT order_items.id AS confirmation_number, quantity, total_price, time_placed, items.name
FROM order_items
JOIN orders ON order_id = orders.id
JOIN items ON items.id = item_id;
