import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstants";

const initialState = {
  isLoading: false,
  todos: [],
  error: null
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
      break;
    
    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null
      }
      break;
    
    case GET_TODOS_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload
      }
      break;
  
    default:
      return state;
  }
}



export default todosReducer;