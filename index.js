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