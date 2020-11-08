import * as React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "./redux";

export const Count2 = () => {
  const count2 = useSelector((s: AppStateType) => s.count2);
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return <div style={style}>count2: {count2}</div>;
};
