
# Plant Store Application Documentation

## Overview
The Plant Store application is a React-based project that provides a user-friendly interface for browsing and purchasing houseplants. This documentation provides an extensive explanation of the application's functionality, file structure, and individual components.

---

## File Structure

1. **`App.jsx`**: Core application file managing state and navigation.
2. **`Home.jsx`**: Landing page component.
3. **`ProductPage.jsx`**: Product listing page component.
4. **`Cart.jsx`**: Shopping cart component.
5. **CSS Files**: Stylesheets for individual pages (`home.css`, `ProductPage.css`, `Cart.css`).

---

## 1. `App.jsx`: Core Application File

### **Purpose**
The `App.jsx` file serves as the central hub of the application. It manages global state and handles navigation between different pages.

### **Key Concepts**
- **State Management**:
  - `cart`: Stores the items added to the shopping cart.
  - `page`: Tracks the current page being displayed (`home`, `products`, `cart`).

- **Functions**:
  - **`addToCart(product)`**: Adds a product to the cart, incrementing the quantity if it already exists.
  - **`removeFromCart(productId)`**: Removes a product from the cart based on its ID.
  - **`updateQuantity(productId, delta)`**: Updates the quantity of a product in the cart, ensuring it doesn’t drop below 1.
  - **`getTotalItems()`**: Calculates the total number of items in the cart.
  - **`getTotalCost()`**: Calculates the total cost of the items in the cart.

- **Dynamic Page Rendering**:
  - `renderPage()` switches between `home`, `products`, and `cart` components based on the `page` state.

- **Header**:
  - Navigation buttons allow switching between pages.
  - The "Cart" button dynamically displays the number of items in the cart.

---

## 2. `Home.jsx`: Landing Page Component

### **Purpose**
Renders the landing page of the application.

### **Props**
- `setPage`: Function passed down from `App.jsx` to switch pages.

### **Structure**
- A welcome message and a "Get Started" button.
- Clicking the button navigates to the products page using `setPage('products')`.

### **Styling**
Uses the `home.css` file for styling.

---

## 3. `ProductPage.jsx`: Product Listing Page Component

### **Purpose**
Displays a list of products available for purchase.

### **Props**
- `products`: Array of product objects.
- `addToCart`: Function to add products to the cart.

### **Structure**
- Maps over the `products` array to render a grid of product cards.
- Each card includes:
  - Product image, name, and price.
  - An "Add to Cart" button to add the product to the cart.

### **Styling**
Uses the `ProductPage.css` file for grid-based layout and card design.

---

## 4. `Cart.jsx`: Shopping Cart Component

### **Purpose**
Displays the shopping cart, showing all added items.

### **Props**
- `cart`: Array of products in the cart.
- `updateQuantity`: Function to adjust the quantity of a product.
- `removeFromCart`: Function to remove a product from the cart.
- `getTotalItems`: Function to calculate the total number of items.
- `getTotalCost`: Function to calculate the total cost.

### **Structure**
- If the cart is empty, displays a message: "Your cart is empty!".
- Otherwise, displays:
  - A list of `cart-item` elements, each containing:
    - Product details (image, name, price, quantity).
    - Controls to increase or decrease the quantity.
    - A "Remove" button to delete the product.
  - A summary with total items, total cost, and a "Checkout" button.

### **Styling**
Uses the `Cart.css` file for styling the layout and controls.

---

## CSS Files

### **home.css**
Styles the landing page with a modern, nature-inspired design.

### **ProductPage.css**
Applies a grid layout for product cards, ensuring responsiveness and aesthetic appeal.

### **Cart.css**
Styles the cart page, focusing on readability and usability.

---

## Application Workflow

1. **Initial Render (`Home` Page)**:
   - The app starts on the landing page.
   - The "Get Started" button navigates to the products page.

2. **Product Listing (`Products` Page)**:
   - Displays products with an option to add them to the cart.

3. **Shopping Cart (`Cart` Page)**:
   - Allows users to view, adjust, and remove items from the cart.
   - Dynamically updates the total items and cost.

4. **Navigation**:
   - Users can switch between pages using the header buttons.

---

## Summary

The Plant Store application leverages React's functional components, props, and state management to provide a modular, scalable, and user-friendly e-commerce platform. Each component is focused on specific functionality, making the codebase easy to maintain and extend.
