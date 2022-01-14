$(document).ready(function () {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const subtotal = localStorage.getItem('subtotal');

  for (const cartItem of cart) {
    $('#order-summary-list').append(`
      <tr>
        <td class="item-name">${cartItem.name}</td>
        <td class="item-qty">${cartItem.qty}</td>
        <td class="item-total-price">$${cartItem.totalPrice}</td>
      </tr>
    `)
  }

  $('#order-total').append(`$${subtotal}`)
})

