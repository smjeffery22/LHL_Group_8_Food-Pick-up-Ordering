# Food Pick-up Ordering - Routes

## User
  - GET     /users                          Show menu with option to add to cart with qty and price
  - POST    /users                          To add order and checkout
  - GET     /users/checkout                 Show order details and form to fill out for user info and payment options
  - POST    /users/checkout                 To place order
  - GET     /users/confirmation             To confirm the order

------------------------------------------------------------------------------------------------------
  - GET     /users/register                 Show register page
  - POST    /users/register                 Register user
  - POST    /users/login                    Login user
    - do we want a separate page for this?
      - if yes, need GET
  - POST    /users/logout                   Logout user
  - GET     /users/:user_id                 Show user info


### Extra(?)
  - GET     /users/:user_id/orders (?)      Past orders?


## Restaurant
  - GET     /restaurants                    Show all current orders
  - GET     /restaurants/order-update       Show a page where the restaurant can update order status
  - POST    /restaurants/order-update       Send order update to the user
