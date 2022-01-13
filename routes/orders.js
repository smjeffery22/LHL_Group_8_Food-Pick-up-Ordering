const express = require('express');
const router = express.Router();

// all routes for admin
const ordersRoutes = (db) => {
  // CREATE order
  router.post('/', (req, res) => {
    const { userOrder } = req.body; // form in front-end
    console.log('coming from checkout page:', userOrder);
    const dateNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // new order created in orders table
    db.query(`
    INSERT INTO orders (time_placed, time_completed, user_id)
    VALUES ($1, $2, $3)
    RETURNING *;`, [dateNow, null, null]) // last null - pass in user id (cookie)
      .then((data) => {
        const order = data.rows[0]; // to grab order id and add into order items table
        console.log('order1:', order);
        userOrder.forEach(item => {
          const queryString = `
              INSERT INTO order_items (quantity, total_price, order_id, item_id)
              VALUES ($1, $2, $3, $4)
              RETURNING *;`
          const values = [item.qty, item.totalPrice, order.id, item.number]

          // items from the new order added in order items table
          db.query(queryString, values)
        })
        console.log('order2:', order)
        return order;
      })
      .then((newOrderRes) => res.json({ message: 'Order Created', order: newOrderRes }))
      .catch((err) => res.status(400).json({ message: err.message }))
  })

  // READ all orders
  router.get('/', (req, res) => {
    const queryString = `
    SELECT oi.order_id, oi.item_id, i.name AS item_name, oi.quantity
    FROM order_items AS oi
    JOIN items as i ON oi.item_id = i.id`

    db.query(queryString)
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err.message));
  })

  return router;
};

module.exports = ordersRoutes;


// // patch request for update?

// // show one specific order
// router.get('/:id', (req, res) => {
//   ordersQueries.getOrders(req.params.id)
//     .then((order) => {
//       res.json(order);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     })
// })

// module.exports = router;
