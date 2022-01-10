const express = require('express');
const router = express.Router();
const itemsQueries = require('../db/queries/items_queries');
const ordersQueries = require('../db/queries/orders_queries');

// All routes for users

router.get('/', (req, res) => {
  itemsQueries.getItems()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err.message);
    })
})

router.post('/', (req, res) => {
  res.send('users page - submit order and proceed to checkout');
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

module.exports = router;



// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };
