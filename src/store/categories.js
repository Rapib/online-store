// State should contain a list of categories as well as the active category.
// Each category should have a normalized name, display name, and a description.
// Create an action that will trigger the reducer to change the active category.
// Update the active category in the reducer when this action is dispatched.
// https://api-js401.herokuapp.com/api/v1/products?category=electronics
// https://api-js401.herokuapp.com/api/v1/products
// https://api-js401.herokuapp.com/api/v1/categories


let data = {"count":5,"results":[{"_id":"5f0cdc15acac790017fc26ce","name":"food","description":"Products for consumption","__v":0},{"_id":"5f0cdc25acac790017fc26cf","name":"electronics","description":"Making your life easier, one volt at a time","__v":0},{"_id":"61610741c271dc0018f3cfe0","name":"games","description":"Fun for the whole family","__v":0},{"_id":"627d6d7cd16f1800183d9660","name":"weapons","description":"Very dangerous!","__v":0},{"_id":"646bf7349d85520014b48a0b","name":"banana","description":"banana","__v":0}]};

const initialState = {
  categories: data.results.map(ele => ele.name),
  activeCategory: null,
}

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_CATEGORY':
      return { ...state,
        activeCategory: action.payload
      }
    default:
      return state;
  }
}
export default categoryReducer;