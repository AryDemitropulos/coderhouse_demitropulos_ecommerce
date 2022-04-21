[![Netlify Status](https://api.netlify.com/api/v1/badges/043d4cca-3c7e-440e-a419-5e6378fe0e65/deploy-status)](https://app.netlify.com/sites/kaleidoscopic-scone-77dd34/deploys)

# Deployed site

[https://kaleidoscopic-scone-77dd34.netlify.app](https://kaleidoscopic-scone-77dd34.netlify.app)

_This project is linked directly to netlify, so everytime new features are pushed, you will see them instantly on the deployed site._

# Project Information

## Project Description:

Final project for the CoderHouse's ReactJS course.
This project is a generic E-Commerce template for generics items and generics categories.
It's meant to be used as a boilerplate for future ecommerce projects.
It uses Material UI as a style library and implements React Router, and severals services and context Providers.
The project has a Firebase database and use Firestores and Firebase Authentication.

## Libraries used:

### React related: 
- react: ^17.0.2
- react-dom: ^17.0.2
- react-router-dom: ^6.2.2

### Style libreries:
- @mui/icons-material: ^5.4.2
- @mui/material: ^5.4.3

### Database:
- firebase: ^9.6.11

### Notification:
- react-toastify: ^8.2.0

## Installation Process:

### After cloning project
### `npm install`
Installs all the necessary packages to start the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## E-commerce navigation Flow:

1. You will land on the home page, where you can view all the items available
2. You can directly select an item or select a category ( from the navbar or from the categories of a particular item ) 
3. If you select a category, you will see all the items that belong to that specific category
4. When you select an item, you will see some extra info, such as more detailed descripcion or if that particular item has already been added to the cart
5. Once you add an item to the cart, the cart icon shows how many items were added and you can navigate to the cart throught the cart icon on the navbar, or thought the button showed on the item detail.
6. In the cart page, you can change the number of items that you want to purshare or remove it from the cart.
7. If everything is OK, you can procede to finalice the buying, but if you have not logged, you will be redirect to the login page.
8. In the login page, you can login or create a new account , after any of that options, you will be redirect to the cart page, where you will be able to finalice the bougth
9. After purchasing the items, a modal will be shown to you with all the sale infomration plus your contact info and a custom code that identifies the sale


## Purchase Demo:
Here's a short demo of how the application works:


![purchase demo](https://i.ibb.co/KWVRVjj/Untitled-2.gif)


