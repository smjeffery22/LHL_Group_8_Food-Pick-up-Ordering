const express = require('express');
const router = express.Router();

const itemsRoutes = (db) => {
  router.get('/menu', (req, res) => {
    db.query(`SELECT * FROM items;`)
      .then((data) => {
        const menuItems = data.rows;
        res.render('menu', { menuItems });
      })
      .catch((err) => console.log(err.message));
  });

  router.get('/order_checkout', (req, res) => {
    res.send('checkout');
  })

  router.get('/order_confirmation', (req, res) => {
    res.send('confirmation');
  })

  return router;
};

module.exports = itemsRoutes;
