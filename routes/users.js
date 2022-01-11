const express = require('express');
const router = express.Router();

const usersRoutes = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM items;`)
      .then((data) => {
        const rows = data.rows
        console.log(rows);
        const items = {};

        for (const row of rows) {
          items[row.id] = {
            name: row.name,
            category: row.category
          }
        }
        console.log(items);
        res.render('../views/index', {items})
      })
      .catch((err) => console.log(err.message));
  });

  // for user to add items to the cart
  router.post('/', (req, res) => {
    const items = req.body;
    // console.log(items);

    const addItems = (items) => {
      const queryString = `
      INSERT INTO order_items (quantity, total_price, order_id, item_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *`
      const values = [items.quantity, items.totalPrice, items.orderId, items.itemId]

      return db.query(queryString, values)
        .then((data) => {
          console.log(data.rows);

        })
        .catch((err) => console.log(err.message));
    };

    addItems(items);
    res.redirect('/users/checkout');
    // addItems(
    //   { quantity: 1, totalPrice: 6.99, orderId: 3, itemId: 1 },
    //   { quantity: 1, totalPrice: 3.99, orderId: 3, itemId: 4 },
    //   { quantity: 1, totalPrice: 1.50, orderId: 3, itemId: 5 }
    // );
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
