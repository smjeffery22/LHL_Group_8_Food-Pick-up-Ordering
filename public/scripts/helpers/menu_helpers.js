// add to cart list
const addToCart = (number, name, price) => {
  return `
  <div id="cart-${number}" class="cart-item">
    ${name}
    ${price}
    <button id="cart-qty-rmv-${number}" class="cart-qty-rmv">-</button><input id="cart-qty-${number}" class="cart-qty" type="number" value="1" min="1" style="width: 40px"><button id="cart-qty-add-${number}" class="cart-qty-add">+</button>
    <span id="cart-tot-price-${number}">${price}</span>
    <button id="remove-cart-${number}" class="remove-cart-item">(x)</button>
  </div>`
};

module.exports = {
  addToCart
};
