const express = require('express');
const router = express.Router();

const viewsRoutes = (db) => {
  router.get("/", (req, res) => {
    res.render("index");
  });

  router.get('/checkout', (req, res) => {
    res.render('checkout');
  })

  router.get('/confirmation', (req, res) => {
    res.render('confirmation');
  })

  router.get('/orders', (req, res) => {
    res.render('orders');
  })

  return router;
};

module.exports = viewsRoutes;
