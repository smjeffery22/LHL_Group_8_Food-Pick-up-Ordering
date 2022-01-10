/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const itemsQueries = require('../db/queries/items_queries')

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
