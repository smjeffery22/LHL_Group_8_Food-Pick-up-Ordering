/* SHOWS ITEMS IN CART */

SELECT items.name as name, items.price as price, order_items.quantity as quantity, order_items.total_price as total_price
FROM items
JOIN order_items ON item_id = items.id
