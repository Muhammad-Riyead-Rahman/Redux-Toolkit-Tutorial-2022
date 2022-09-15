import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { incrementCounter, decrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
  // const [count, setCount] = useState(0);

  // const count = useSelector((state) => console.log(state));
  const count = useSelector((state) => state.count);
  console.log(count);

  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    // setCount((count) => count + 1);
    dispatch(incrementCounter());
  };

  const handleDecrement = (e) => {
    // setCount((count) => count + 1);
    dispatch(decrementCounter());
  };

  const handleReset = (e) => {
    // setCount((count) => count + 1);
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>Counter App</h2>
      {/* <h3>Count: {count}</h3> */}
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;