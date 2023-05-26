const initialState = {
  products: [],
}


export const fetchProducts = () => async (dispatch) => {
  let response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
  let data = await response.json();
  dispatch({
    type: 'ADD_PRODUCT',
    payload: data
  });
}

export const addCartToApi = async (action) => {
  console.log('action20', action);
  let response = await fetch(`https://api-js401.herokuapp.com/api/v1/products/${action.payload._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...action.payload, inStock: action.payload.inStock - 1 })
  })
  let data = await response.json();
  console.log('26data', data);
  return data;
}

export const removeCartToApi = async (action) => {
  console.log('32removeapi',action.payload);
  let response = await fetch(`https://api-js401.herokuapp.com/api/v1/products/${action.payload._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...action.payload, inStock: action.payload.inStock + 1})
    })
    let data = await response.json();
    
  return data;
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_CATEGORY':
      return state;
    case 'ADD_CART':
      addCartToApi(action);
      return {
        products: state.products.map(product => {
          console.log('product.inStock', product.inStock);
          if (product.name === action.payload.name) { product.inStock -= 1 }
          return product;
        })
      };
    case 'REMOVE_CART':
      removeCartToApi(action);
      return {
        products: state.products.map(product => {
          if (product.name === action.payload.name) { product.inStock += 1 }
          return product;
        })
      };
    case 'ADD_PRODUCT':
      return { products: action.payload.results };
    default:
      return state;
  }
}
export default productReducer;
