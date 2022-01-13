// Client facing scripts here
$(document).ready(function () {
  // add items to the cart
  const cartArray = [];
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

        cartArray.push({
          number: itemNumber,
          name: itemName,
          price: itemPrice,
          qty: 1,
          total: 123
        });
        console.log(cartArray);

      } else {
        alert('Already added in the cart!');
      }

      // remove items from the cart
      $(`#remove-cart-${itemNumber}`).on('click', function () {
        $(this).parent().remove();
        rmvCartArrItem(cartArray, itemNumber);
      })

      // update qty in cart
      let cartQtyEl = $(`#cart-qty-${itemNumber}`);
      let cartQty = parseInt(cartQtyEl.val());

      $(`#cart-qty-add-${itemNumber}`).on('click', function () {
        cartQty += 1;
        cartQtyEl.val(cartQty);
        updateCartArrQty(cartArray, itemNumber, cartQty);
      })

      $(`#cart-qty-rmv-${itemNumber}`).on('click', function () {
        if (cartQty <= 1) {
          $(this).parent().remove();
          rmvCartArrItem(cartArray, itemNumber);
        } else {
          cartQty -= 1;
          cartQtyEl.val(cartQty);
          updateCartArrQty(cartArray, itemNumber, cartQty);
        }
      })
    })
  }
  $('#checkout').on('click', () => {
    window.localStorage.setItem('cart', JSON.stringify(cartArray));
    console.log(window.localStorage.getItem('cart'));
  })
})



// add to cart list
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
