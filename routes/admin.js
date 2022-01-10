const express = require('express');
const router = express.Router();
const ordersQueries = require('../db/queries/orders_queries');

// all routes for admin

// show all orders
router.get('/', (req, res) => {


  ordersQueries.getOrders()
    .then((orders) => {
      let array = [];
      ordersQueries.getOrderDetail()
        .then((orderDetail) => {
          array.push(orders, orderDetail);
          res.json(array);
        })

    })
    .catch((err) => {
      console.log(err.message);
    })

  // ordersQueries.getOrderDetail()
  // .then((orderDetail) => {
  //   res.json(orderDetail);
  // })
  // .catch((err) => {
  //   console.log(err.message);
  // })
})

// patch request for update?

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
