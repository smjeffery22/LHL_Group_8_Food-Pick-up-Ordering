// Client facing scripts here

$(document).ready(function () {

  const renderMenuItem = (itemData) => {
    return `
    <div class="container">
     <div class="row">
        <div class="col-sm-12 col-lg-6">
    <div class="card" style="flex-direction:unset">
      <img class="card-img" src="${itemData.photo_url}" class="burger-image" alt="burger image"">
      <div class="card-img-overlay d-flex justify-content-end">
          <a href="#" class="card-link text-danger like">
            <i class="fas fa-heart"></i>
          </a>
        </div>
        <div class="card-body">
          <h4 class="card-title">${itemData.name}</h4>
          <p class="card-text">
            ${itemData.description}</p>

          <div class="buy d-flex justify-content-between align-items-center">
            <div class="price text-success"><h5 class="mt-4">${itemData.price}</h5></div>
             <a href="#" class="btn btn-danger mt-3" id="item-${itemData.id}><i class="fas fa-shopping-cart"></i> Add to Cart</a>
          </div>
    </div>
  </div>
</div>`
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

