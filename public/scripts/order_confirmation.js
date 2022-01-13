$(document).ready(function () {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const subtotal = localStorage.getItem('subtotal');

  for (const cartItem of cart) {
    $('#order-summary-list').append(`
      <tr>
        <td>${cartItem.name}</td>
        <td>${cartItem.qty}</td>
        <td>${cartItem.totalPrice}</td>
      </tr>
    `)
  }

  $('#order-total').append(`$${subtotal}`)
})

