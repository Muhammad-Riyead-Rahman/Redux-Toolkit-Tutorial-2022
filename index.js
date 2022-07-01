
const {createStore} = require('redux');

//Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//Defining state
const initialCounterState = {
  count: 0,
};

//Create action (Action are object type, that are two things - type, payload)

//Increment counter
const incrementCounterAction = () => {
  return {
    type: "INCREMENT",
  };
};

//Decrement counter
const decrementCounterAction = () => {
  return {
    type: DECREMENT
  }
}

//Reset counter
const resetCounterAction = () => {
  return {
    type: RESET
  }
} 

//Create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
      
      break;
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
      break;
    
    case RESET:
      return {
        ...state,
        count: 0
      }
  
    default:
      state;
  }
}


//create store - getState(), dispatch(), subscribe()
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});


//dispatch action
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());