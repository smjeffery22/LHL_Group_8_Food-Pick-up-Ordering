$(document).ready(function () {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const subtotal = localStorage.getItem('subtotal');

  $('#btn-confirm-order').append(`$${subtotal}`)

  $('#btn-confirm-order').on('click', () => {
    $.ajax({
      url: '/api/orders',
      type: 'POST',
      data: { userOrder: cart },
      success: (data) => {
        alert('post success');
        console.log(data);
      }
    })
    window.location.href = '/users/order_confirmation';
  })
})
