import { INCREMENT, DECREMENT, RESET } from "../constants/counterConstant";

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    
    case RESET:
      return {
        ...state,
        count: 0,
      };
      break;
  
    default:
      return state;
  }
}

export default counterReducer;