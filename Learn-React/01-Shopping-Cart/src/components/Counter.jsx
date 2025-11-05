import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseby1,
  decreaseby1,
  increasebyValue,
  increaseby10,
  decreaseby10,
} from "../app/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter value: {count}</h1>
      <button onClick={() => dispatch(increaseby1())}>Increase By 1</button>
      <button onClick={() => dispatch(increaseby10())}>Increase By 10</button>
      <button onClick={() => dispatch(decreaseby1())}>Decrease By 1</button>
      <button onClick={() => dispatch(decreaseby10())}>Decrease By 10</button>
      <button onClick={() => dispatch(increasebyValue(100))}>
        Increase by Value
      </button>
    </div>
  );
};

export default Counter;
