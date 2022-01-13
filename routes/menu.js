const express = require('express');
const router = express.Router();

const menuRoutes = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM items;`)
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err.message));
  });

  return router;
};

module.exports = menuRoutes;
