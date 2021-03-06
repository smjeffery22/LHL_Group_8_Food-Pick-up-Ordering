// Client facing scripts here


$(document).ready(function () {

  const renderMenuItem = (itemData) => {
    return `
<section id="food-menu">
<div class="food-menu-container container">
  <div class="food-menu-item">
    <div class="food-img">
      <img src="${itemData.photo_url}" alt="" />
    </div>
    <div class="food-description">
      <h2 class="food-titile">${itemData.name}</h2>
      <p>
        ${itemData.description}
      </p>
      <p class="food-price">Price: &#8377; ${itemData.price}</p>
 <a href="#" class="btn btn-danger mt-3" id="item-${itemData.id}><i class="fas fa-shopping-cart"></i> Add to Cart</a>
    </div>
  </div>
</div>
</section>`

  }

  const renderCartItem = (itemId) => {
    return `<p>${itemId}</p>`
    // return `
    // <div class="cart-item" style="margin: 1em">
    //   <p>${itemData.name}</p>
    //   <div>
    //     <button>-</button>
    //     <p>1</p>
    //     <button>+</button>
    //   </div>
    //   <p class="price">$${itemData.price}</p>
    //   <button class="remove-cart-item">(-)</button>
    // </div>`
  }


  $.get("/api/v1/items")
    .then(menuItems => {
      for (const item of menuItems) {
        if (item.category === 'Burgers') {
          $('#menu-burgers').append(renderMenuItem(item));
        }

        if (item.category === 'Sides') {
          $('#menu-sides').append(renderMenuItem(item));
        }

        if (item.category === 'Drinks') {
          $('#menu-drinks').append(renderMenuItem(item));
        }
      }

      const addCartButtons = $.find('.add-cart-button');

      for (const button of addCartButtons) {
        $(button).on('click', (e) => {
          $('#cart-list').append(renderCartItem(e.target.id));
        })
      }
    })





  // event listener for adding item to cart
  // $('.add-cart-button').on('click', () => {
  //   $('#cart-light-b').empty();

  //   $('#cart-light-b').append(`
  //   <div>
  //       Light Burger
  //       <button class="cart-qty-remove">-</button>
  //       <input type="number" class="cart-qty">
  //       <button class="cart-qty-add">+</button>
  //       $9.99
  //       $9.99
  //       <button class="cart-light-b-remove">(-)</button>
  //   </div>`)
  // });



  // event listener for removing item from cart
  $('.cart-light-b-remove').on('click', (e) => {
    e.preventDefault();
    $('.cart-light-b-remove').parent().remove();
  });

  // event listener for updating qty in cart
  const updateCartQty = () => {
    let cartQty = parseInt($('.cart-qty').val());
    console.log(typeof (cartQty));

    $('.cart-qty-remove').on('click', (e) => {
      e.preventDefault();
      cartQty -= 1;
      $('.cart-qty').val(cartQty);
    })

    $('.cart-qty-add').on('click', (e) => {
      e.preventDefault();
      cartQty += 1;
      $('.cart-qty').val(cartQty);
    })
  }

  updateCartQty();
})