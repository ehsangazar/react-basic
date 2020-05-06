const CartReducer = (state,action) => {
    let newCarts = []
    switch (action.type) {
        case 'ADD_TO_CART':
            newCarts = [...state.carts, action.id]
            localStorage.setItem("carts", JSON.stringify(newCarts));
            return {
              ...state,
              carts: newCarts,
            };
        case 'REMOVE_FROM_CART':
            newCarts = state.carts
            newCarts.splice(
              state.carts.findIndex((cartId) => cartId === action.id),
              1
            );
            localStorage.setItem("carts", JSON.stringify(newCarts));
            return {
              ...state,
              carts: newCarts,
            };
        default:
            break;
    }
}

export default CartReducer