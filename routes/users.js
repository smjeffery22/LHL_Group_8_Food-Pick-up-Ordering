const express = require('express');
const router = express.Router();

const usersRoutes = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM items;`)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.log(err.message));
  });

  // for user to add items to the cart
  router.post('/', (req, res) => {
    const items = req.body;
    console.log(items);

    // const queryString = `
    // INSERT INTO order_items (quantity, total_price, order_id, item_id)
    // VALUES ($1, $2, $3, $4)
    // RETURNING *`
    // const values = [cart.quantity, cart.totalPrice, cart.orderId, cart.itemId]

    // return pool.query(queryString, values)
    //   .then((data) => console.log('addItems:', data))
    //   .catch((err) => console.log(err.message));
  })

  router.get('/checkout', (req, res) => {
    res.send('checkout page');
  })

  router.post('/checkout', (req, res) => {
    res.send('checkout page - chekout and proceed to confirmation page');
  })

  router.get('/confirmation', (req, res) => {
    res.send('confirmation page');
  })

  return router;
};

module.exports = usersRoutes;
