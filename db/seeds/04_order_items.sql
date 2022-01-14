-- order_items table seeds here

INSERT INTO order_items (quantity, total_price, order_id, item_id)
VALUES (2, 6.99 * 2, 1, 1),
       (2, 3.99 * 2, 1, 4),
       (2, 1.50 * 2, 1, 5);

-- INSERT INTO order_items (quantity, total_price, order_id, item_id)
-- VALUES (3, 10.99 * 3, 2, 2),
--        (1, 3.99, 2, 4);

-- INSERT INTO order_items (quantity, total_price, order_id, item_id)
-- VALUES (3, 10.99 * 3, 3, 2),
--        (1, 3.99, 3, 4);
