import * as React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "./redux";

export const Count = () => {
  const count = useSelector((s: AppStateType) => s.count);
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return <div style={style}>count: {count}</div>;
};
