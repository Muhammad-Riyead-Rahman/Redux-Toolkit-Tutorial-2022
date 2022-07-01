const {createStore, combineReducers, applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');



//product const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//cart const
const GET_CART_ITEM = "GET_CART_ITEM";
const ADD_CART_ITEM = "ADD_CART_ITEM";


//product initial state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2
}


//cart initial state
const initialCartState = {
  carts: ["shirt", "pent"],
  numberOfCarts: 2
}


//product action
const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}


const addProducts = (proudct) => {
  return {
    type: ADD_PRODUCTS,
    payload: proudct
  }
}


//cart action
const getCartItem = () => {
  return {
    type: GET_CART_ITEM
  }
}


const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item
  }
}

//product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      }
      break;
    
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1

      }
      break;
  
    default:
      return state;
  }
}


//cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state
      }
      break;
    
    case ADD_CART_ITEM:
      return {
        carts: [...state.carts, action.payload],
        numberOfCarts: state.numberOfCarts + 1
      }
      break;
  
    default:
      return state;
  }
}

//combine all reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer
})


//create store
const store = createStore(rootReducer, applyMiddleware(logger));

//subscribe to store
store.subscribe(() => {
  console.log(store.getState());
});

//call dispatch
store.dispatch(getProducts());
store.dispatch(addProducts("rice"));

store.dispatch(getCartItem());
store.dispatch(addCartItem("t-shirt"));