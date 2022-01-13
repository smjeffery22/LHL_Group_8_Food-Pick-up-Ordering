const express = require('express');
const router = express.Router();

const adminRoutes = (db) => {
  router.get("/", (req, res) => {
    const queryString = `
    SELECT oi.order_id, oi.item_id, i.name AS item_name, oi.quantity
    FROM order_items AS oi
    JOIN items as i ON oi.item_id = i.id`

    db.query(queryString)
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err.message));
  });

  return router;
};

module.exports = adminRoutes;
