export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  ADD_MODAL: "ADD_MODAL",
  ADD_ORDERS: "ADD_ORDERS",
  ADD_USERS: "ADD_USERS",
  ADD_CATEGORIES: "ADD_CATEGORIES",
};

export const addToCart = (product, cart) => {
  //that product is already in the cart
  if (cart.some((p) => p.id === product.id)) {
    const newCart = [...cart];
    newCart.forEach((item) => {
      if (item.id === product.id) item.quantity += 1;
    });

    return {
      type: "ADD_CART",
      payload: newCart,
    };
  }
  //that product is not in the cart
  return {
    type: "ADD_CART",
    payload: [...cart, { ...product, quantity: 1 }],
  };
};

export const removeFromCart = (product, cart) => {
  const newCart = cart.filter((p) => p.id != product.id);

  return {
    type: "ADD_CART",
    payload: newCart,
  };
};
