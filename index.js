
//Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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
  
    default:
      state;
  }
}


