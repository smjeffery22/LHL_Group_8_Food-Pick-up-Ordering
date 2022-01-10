const express = require('express');
const router = express.Router();
const ordersQueries = require('../db/queries/orders_queries');

// all routes for admin

// show all orders
router.get('/', (req, res) => {
  ordersQueries.getOrders()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err.message);
    })
})

// show one specific order
router.get('/:id', (req, res) => {
  ordersQueries.getOrders(req.params.id)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err.message);
    })
})

module.exports = router;
