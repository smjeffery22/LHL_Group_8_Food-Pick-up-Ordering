$(document).ready(function () {
  $('.time-estimate').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      url: '/admin/time_notification',
      type: 'POST',
      data: $(this).serialize(),
      success: (data) => {
        alert('Order estimate time sent.');
        console.log(data);
      }
    })
  })

  $('#btn-order-ready').on('click', function (e) {
    e.preventDefault();
    $.ajax({
      url: '/admin/order_update',
      type: 'POST',
      success: (data) => {
        alert('Order update sent.');
        console.log(data);
      }
    })
  })

  $.get('/api/orders')
    .then((data) => {
      console.log(data);

      renderOrder(data)

      // const orderItems = data;
      // const orders = {};

      // for (const orderItem of orderItems) {
      //   console.log(orderItem);
      //   orders[orderItem['order_id']] = {
      //     order_id: 1,
      //     timePlaced: 2,

      //   };
      // }

      // const orders = {
      //   1: {
      //     order_id: 1,
      //     timePlaced: 2022,
      //     items: [{
      //       item_id: 1,
      //       item_name: 1,
      //       quantity: 1
      //   },
      //     {
      //       item_id: 1,
      //       item_name: 1,
      //       quantity: 1
      //   },
      //     {
      //       item_id: 1,
      //       item_name: 1,
      //       quantity: 1
      //   }]
      //   }
      // };



      // console.log(data);
    })
})

const renderOrder = function (orders) {
  const orderSummary = $('.order-item-list');

  for (const order of orders) {
    orderSummary.prepend(`
      <tr>
        <td>${order.order_id}</td>
        <td>${order.item_id}</td>
        <td>${order.item_name}</td>
        <td>${order.quantity}</td>
      </tr>`
      )
  }
}
