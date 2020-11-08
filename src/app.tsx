import * as React from "react";
import { useDispatch } from "react-redux";
import { Count } from "./count";
import { Count2 } from "./count2";
import { actionCreators } from "./redux";

export const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Count></Count>
      <Count></Count>
      <Count></Count>
      <Count2></Count2>
      <Count2></Count2>
      <Count2></Count2>
      <button onClick={() => dispatch(actionCreators.countUp())}>
        count up
      </button>
      <button onClick={() => dispatch(actionCreators.countUp2())}>
        count up2
      </button>
    </>
  );
};
