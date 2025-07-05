# 🧩 Components Directory

This directory contains all reusable and structural **React components** used in the `react11` project.

---

## 📦 Available Components

### `Cart.jsx`
> A component that displays the user's shopping cart with support for quantity change, item deletion, and dynamic total calculation.

- Props:  
  - `cart` → array of cart items

- Features:
  - Conditional rendering if the cart is empty
  - Individual item subtotal calculation
  - General cart total display
  - FontAwesome trash icon for item deletion (not functional yet)

---

### `Product.jsx`
> A component to visually display a product item with image, title, price and an “Add” button.

- Props:  
  - `data` → product object  
  - `cart` → add-to-cart callback (passed as function)

- Features:
  - Styled product layout using Flexbox
  - Add-to-cart event trigger

---

### `Shop.jsx`
> Maps over the `products` array and renders a list of `Product` components.

- Props:  
  - `products` → array of product objects

---

## 🖼 Screenshots
_(Optional: Add screenshots or demo GIFs here if applicable)_

---

## 🎨 Styling

- Components are styled using **Sass (SCSS)**.
- Layout is built with `flexbox` and custom responsive styles.

---

## 🚀 Coming Next

- Functional "Add", "Remove", and Quantity Update logic
- Backend/API integration
- LocalStorage or Context for cart persistence

---

## 🧠 Author

Designed and developed by [Hossein Vali (ho3ein81)](https://github.com/ho3ein81)

---

## 📂 Project Root

To see the full project: [react11 Repository](https://github.com/ho3ein81/react11)
