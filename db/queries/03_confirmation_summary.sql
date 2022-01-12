/* Shows confirmation # and summary of order */
SELECT items.name, quantity, total_price, time_placed
FROM order_items
JOIN orders ON order_id = orders.id
JOIN items ON items.id = item_id;
