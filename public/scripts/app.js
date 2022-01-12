// Client facing scripts here
$(document).ready(function () {
  // add items to the cart
  const cart = [];
  const addCartButtons = $.find('.add-cart-button');

  for (const addCartButton of addCartButtons) {
    $(addCartButton).on('click', function (e) {
      const cartList = $('#cart-list');
      const itemNumber = e.target.id;
      const itemName = $(this).parent().children('.item-name').text();
      const itemPrice = $(this).parent().children('.item-price').text();
      const isItemDuplicate = cartList.children(`#cart-${itemNumber}`).attr('id') !== `cart-${itemNumber}`;

      // prevent duplicate items being added to the cart
      if (isItemDuplicate) {
        cartList.append(addToCart(itemNumber, itemName, itemPrice));
      } else {
        alert('Already added in the cart!');
      }

      // remove items from the cart
      $(`#remove-cart-${itemNumber}`).on('click', function () {
        $(this).parent().remove();
      })

      // update qty in cart
      let cartQtyEl = $(`#cart-qty-${itemNumber}`);
      let cartQty = parseInt(cartQtyEl.val());

      $(`#cart-qty-add-${itemNumber}`).on('click', function () {
        cartQty += 1;
        cartQtyEl.val(cartQty);
      })

      $(`#cart-qty-rmv-${itemNumber}`).on('click', function () {
        if (cartQty <= 1) {
          $(this).parent().remove();
        } else {
          cartQty -= 1;
          cartQtyEl.val(cartQty);
        }
      })
    })

  }
  $('#checkout').on('click', () => {
    console.log('checkout');
  })
})


// cart.push({
//   number: itemNumber,
//   name: itemName,
//   price: itemPrice,
//   qty: 1,
//   total: 123
// });

const addToCart = (number, name, price) => {
  return `
  <div id="cart-${number}" class="cart-item">
    ${name}
    ${price}
    <button id="cart-qty-rmv-${number}" class="cart-qty-rmv">-</button><input id="cart-qty-${number}" class="cart-qty" type="number" value="1" min="1" style="width: 40px"><button id="cart-qty-add-${number}" class="cart-qty-add">+</button>
    123
    <button id="remove-cart-${number}" class="remove-cart-item">(x)</button>
  </div>`
}








