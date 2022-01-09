# Food Pick-up Ordering - User Story

## User
  - As a user I would like to make an order because I want to buy food for pick-up.
  - As a user, I would like to see my current order to place/edit my order
  - As a user, I would like to see estimated time arrival 
  - As a user, I would like to see the menu and decide what to order.
  - As a user, I would like to see what items I have selected in a cart.


## Restaurant
  - As a restaurant owner, I would like to see all orders made by the users
  - As a restaurant owner, I would like to receive SMS notification when an order is placed by a user
  - As a restaurant owner, I would like to send SMS notification to the user to notify:
    - estimated time to get the order prepared
    - when the order is ready

# Food Pick-up Ordering - Features

## User
  - View Menu
  - Add/remove food item
  - View cart
  - Add contact details
  - Place order
  - Make payment online
  - Recieve SMS for update of order

## Restaurant
  - View orders placed
  - Send SMS
  - Take payment in store or online

----------------------------------------------------------------------------------------------------------------------------
Option 10: Food Pick-up Ordering
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

You can use a modern telecomm API service such as Twilio to implement SMS communication from the website to the client and restaurant.

For inspiration check out how Ritual works, but keep in mind that's implemented as a native app and serves more than one restaurant.
