const express = require('express');
const { sendEstimatedTimeSMS, sendOrderReadySMS } = require('../send-sms');
const router = express.Router();

const adminRoutes = (db) => {
  router.get("/", (req, res) => {
    res.render('admincopy');
  });

  router.post("/time_notification", (req, res) => {
    const time = req.body.timeestimate;
    sendEstimatedTimeSMS(time);
    res.send('Estimated time sent.')
  })

  router.post("/order_update", (req, res) => {
    sendOrderReadySMS();
    res.send('Order update sent.')
  })

  return router;
};

module.exports = adminRoutes;
