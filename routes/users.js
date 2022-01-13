const express = require('express');
const router = express.Router();

const usersRoutes = (db) => {
  router.get('/menu', (req, res) => {
    db.query(`SELECT * FROM items;`)
      .then((data) => {
        const menuItems = data.rows;
        res.render('menu', { menuItems });
      })
      .catch((err) => console.log(err.message));
  });

  router.get('/order_checkout', (req, res) => {
    res.render('order_checkout');
  })

  router.get('/order_confirmation', (req, res) => {
    res.render('order_confirmation');
  })

  return router;
};

module.exports = usersRoutes;
