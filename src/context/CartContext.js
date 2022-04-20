import { createContext, useState } from "react";
import { errorNotification } from "../services/notificationService";
export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getTotalItems = () => {
    return cart.reduce((previous, { quantity }) => previous + quantity, 0);
  };

  const getQuantityOfProduct = (id) => {
    return cart.find(({ product }) => product.id === id)?.quantity || 0;
  };

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      changeItemQuantity(product.id, quantity);
    } else {
      addItemToCart({
        product,
        quantity,
        total: product.price * quantity,
      });
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter(({ product }) => product.id !== id);
    setCart(newCart);
  };

  const isInCart = (id) => {
    return cart.some(({ product }) => product.id === id);
  };

  const changeItemQuantity = (id, quantity) => {
    let newCart = [...cart];
    newCart.find(({ product }) => product.id === id).quantity += quantity;
    setCart(newCart);
  };

  const addItemToCart = (cartItem) => {
    const newCart = [...cart, cartItem];
    setCart(newCart);
  };

  const getTotalProduct = (product, quantity) => {
    return product.price * quantity;
  };

  const getTotal = (cartItem) => {
    return Number.parseFloat(
      cart.reduce((previous, { total }) => previous + total, 0)
    ).toFixed(2);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const updateCartProduct = (product, quantity) => {
    const newCart = [...cart];
    const productToUpdate = newCart.find(
      ({ product: { id } }) => id === product.id
    );
    if (productToUpdate) {
      productToUpdate.quantity = quantity;
      setCart(newCart);
    } else {
      errorNotification("Product not found");
    }
  };

  const cartContext = {
    cart,
    getTotalItems,
    addItem,
    removeItem,
    getTotal,
    cleanCart,
    getQuantityOfProduct,
    updateCartProduct,
  };

  return <Provider value={cartContext}>{children}</Provider>;
};

export default CartContext;
