
const {createStore} = require('redux');

//Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_COUNTER_BY_PAYLOAD = "INCREMENT_COUNTER_BY_PAYLOAD";
const INCREMENT_USER = "INCREMENT_USER";

//Defining state
const initialCounterState = {
  count: 0,
  users: ["Riyead"]
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

//Increment counter by payload
const incrementCounterByPaloadAction = (value) => {
  return {
    type: INCREMENT_COUNTER_BY_PAYLOAD,
    payload: value
  }
}

//Increment user
const incrementUserAction = (user) => {
  return {
    type: INCREMENT_USER,
    payload: user
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
    
      break;
    
    case INCREMENT_COUNTER_BY_PAYLOAD:
      return {
        ...state,
        count: state.count + action.payload
      }
    
      break;
    
    case INCREMENT_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
      break;
  
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
store.dispatch(incrementCounterByPaloadAction(5));
store.dispatch(incrementUserAction(" Harun"));