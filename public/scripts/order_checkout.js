$(document).ready(function () {
  const cart = localStorage.getItem('cart');
  const subtotal = localStorage.getItem('subtotal');

  console.log($('#btn-confirm-order').append(` $${subtotal}`))
})
