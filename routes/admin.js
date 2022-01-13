const express = require('express');
const router = express.Router();

const adminRoutes = (db) => {
  router.get("/", (req, res) => {
    res.render('admin');
  });

  return router;
};

module.exports = adminRoutes;
