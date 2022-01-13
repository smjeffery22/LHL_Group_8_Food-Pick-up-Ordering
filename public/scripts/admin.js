$(document).ready(function () {
  $.get('/api/orders')
    .then((data) => {
      console.log(data);
      // renderOrder(data)
    })
})

const renderOrder = function (orders) {
  const orderSummary = $('#order-summary');

  for (const order of orders) {
    orderSummary.append(`
    <div class="order">
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Item #</th>
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody id="order-summary-list">
            <tr>
              <td>${order.order_id}</td>
              <td>${order.item_id}</td>
              <td>${order.item_name}</td>
              <td>${order.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>`)
  }
}
