const express = require('express');
const router = express.Router();

// all routes for admin
const adminRoutes = (db) => {
  // show all orders
  router.get('/', (req, res) => {
    const queryString = `
    SELECT oi.order_id, oi.item_id, i.name AS item_name, oi.quantity
    FROM order_items AS oi
    JOIN items as i ON oi.item_id = i.id`

    db.query(queryString)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })

  return router;
};

module.exports = adminRoutes;


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
