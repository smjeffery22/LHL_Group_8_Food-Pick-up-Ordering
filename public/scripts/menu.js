$(document).ready(function () {
  // add items to the cart
  const cartArray = [];
  let subtotal;
  const addCartButtons = $.find('.add-cart-button');

  for (const addCartButton of addCartButtons) {
    $(addCartButton).on('click', function (e) {
      const cartList = $('#cart-list');
      const itemNumber = e.target.id;
      const itemName = $(this).parent().children('.food-title').text();
      const itemPrice = $(this).parent().children('.food-price').text();
      const isItemDuplicate = cartList.children(`#cart-${itemNumber}`).attr('id') !== `cart-${itemNumber}`;
      let subtotal = parseFloat($('#subtotal-price').text());

      // prevent duplicate items being added to the cart
      if (isItemDuplicate) {
        cartList.append(addToCart(itemNumber, itemName, itemPrice));

        cartArray.push({
          number: itemNumber,
          name: itemName,
          price: itemPrice,
          qty: 1,
          totalPrice: itemPrice
        });
        console.log(cartArray);
      } else {
        alert('Already added in the cart!');
      }

      // remove items from the cart
      $(`#remove-cart-${itemNumber}`).on('click', function () {
        $(this).parent().remove();
        rmvCartArrItem(cartArray, itemNumber);
        updateCartSubtotal();
      })

      // update qty and total price in cart
      let cartQtyEl = $(`#cart-qty-${itemNumber}`);
      let cartQty = parseInt(cartQtyEl.val());
      let cartTotalPriceEl = $(`#cart-tot-price-${itemNumber}`)
      let cartTotalPrice = parseInt(cartTotalPriceEl.text());

      $(`#cart-qty-add-${itemNumber}`).on('click', function () {
        cartQty += 1;
        cartQtyEl.val(cartQty);
        cartTotalPrice = (cartQty * parseFloat(itemPrice)).toFixed(2).toString();
        cartTotalPriceEl.text(cartTotalPrice);
        updateCartArrQty(cartArray, itemNumber, cartQty);
        updateCartArrTotPrice(cartArray, itemNumber, cartTotalPrice);
        updateCartSubtotal();
      })

      $(`#cart-qty-rmv-${itemNumber}`).on('click', function () {
        if (cartQty <= 1) {
          $(this).parent().remove();
          rmvCartArrItem(cartArray, itemNumber);
          updateCartSubtotal();
        } else {
          cartQty -= 1;
          cartQtyEl.val(cartQty);
          cartTotalPrice = (cartQty * parseFloat(itemPrice)).toFixed(2).toString();
          cartTotalPriceEl.text(cartTotalPrice);
          updateCartArrQty(cartArray, itemNumber, cartQty);
          updateCartSubtotal();
        }
      })

      updateCartSubtotal();

      $('#checkout').on('click', () => {
        if (cartArray.length === 0) {
          alert('You cart is empty!');
        } else {
          window.localStorage.setItem('cart', JSON.stringify(cartArray));
          window.localStorage.setItem('subtotal', $('#subtotal-price').text());
          window.location.href = '/users/order_checkout';
        }
      })
    })
  }

  $('#checkout').on('click', () => {
    if (cartArray.length === 0) {
      alert('You cart is empty!');
    }
  })
})

// add to cart list
const addToCart = (number, name, price) => {
  return `
  <div id="cart-${number}" class="cart-item">
  ${name}
  ${price}
  <button id="cart-qty-rmv-${number}" class="cart-qty-rmv">-</button><input id="cart-qty-${number}" class="cart-qty" type="number" value="1" min="1" style="width: 40px"><button id="cart-qty-add-${number}" class="cart-qty-add">+</button>
  <span id="cart-tot-price-${number}" class="cart-tot-price">${price}</span>
  <button id="remove-cart-${number}" class="remove-cart-item">(x)</button>
  </div>`
}

// update subtotal in cart
const updateCartSubtotal = () => {
  const cartItems = $.find('.cart-item');
  let subtotal = 0.00;

  if (cartItems.length === 0) {
    subtotal = '0.00';
    $('#subtotal-price').text(subtotal);
  } else {
    for (const cartItem of cartItems) {
      const cartItemTotal = parseFloat($(cartItem).children('.cart-tot-price').text());
      subtotal += cartItemTotal;
      $('#subtotal-price').text(subtotal.toFixed(2).toString());
    }
  }
}

// delete cart item from cart array
const rmvCartArrItem = (cartArr, itemNumber) => {
  for (const cartItem of cartArr) {
    if (cartItem.number === itemNumber) {
      const index = cartArr.indexOf(cartItem);
      cartArr.splice(index, 1);
      // console.log('current cart:', cartArr);
    }
  }
};

// update item qty in cart array
const updateCartArrQty = (cartArr, itemNumber, cartQty) => {
  for (const cartItem of cartArr) {
    if (cartItem.number === itemNumber) {
      cartItem.qty = cartQty;
      console.log('current cart:', cartArr);
    }
  }
};

// update total price in cart array
const updateCartArrTotPrice = (cartArr, itemNumber, cartTotalPrice) => {
  for (const cartItem of cartArr) {
    if (cartItem.number === itemNumber) {
      cartItem.totalPrice = cartTotalPrice;
      console.log('current cart:', cartArr);
    }
  }
};
