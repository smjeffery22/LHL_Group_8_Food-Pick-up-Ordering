const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// send SMS notification to the restaurant when customer places an order
const sendOrderSMS = () => {
  client.messages.create({
    to: '+19053306868',
    from: '+15484892011',
    body: 'New order received!'
  })
  .then((message) => console.log(message.sid));
}

// send SMS notification to the customer after receiving an order to notify estimated time for order preparation
const sendEstimatedTimeSMS = (time) => {
  client.messages.create({
    to: '+19053306868',
    from: '+15484892011',
    body: `Your order will be ready in ${time} minutes!`
  })
  .then((message) => console.log(message.sid));
}

// send SMS notification to the customer when the order is ready for pick-up
const sendOrderReadySMS = () => {
  client.messages.create({
    to: '+19053306868',
    from: '+15484892011',
    body: `Your order is ready!`
  })
  .then((message) => console.log(message.sid));
}

module.exports = {
  sendOrderSMS,
  sendEstimatedTimeSMS,
  sendOrderReadySMS
}
