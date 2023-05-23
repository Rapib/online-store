const initialState = {
  cart: [],
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART':
      return { cart: [...state.cart, action.payload] };
    case 'REMOVE_CART':
      let idx = state.cart.indexOf(action.payload);
      let obj = state.cart;
      let res = {cart: obj.toSpliced(idx,1)}
      console.log(res);
      return res;
    default:
      return state;
  }
}
export default cartReducer;