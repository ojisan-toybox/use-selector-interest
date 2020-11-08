import { createStore } from "redux";

// action type
const COUNT_UP = "app/COUNT_UP" as const;
const COUNT_UP2 = "app/COUNT_UP2" as const;

export const actionTypes = {
  COUNT_UP,
  COUNT_UP2,
};

// action creators
const countUp = () => {
  return {
    type: actionTypes.COUNT_UP,
  };
};

const countUp2 = () => {
  return {
    type: actionTypes.COUNT_UP2,
  };
};

export const actionCreators = {
  countUp,
  countUp2,
};

export type AppActionType =
  | ReturnType<typeof countUp>
  | ReturnType<typeof countUp2>;

// states

export type AppStateType = {
  count: number;
  count2: number;
};

const initialState: AppStateType = {
  count: 0,
  count2: 0,
};

// reducers
const reducer = (state = initialState, action: AppActionType) => {
  const { type } = action;
  switch (type) {
    case actionTypes.COUNT_UP:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.COUNT_UP2:
      return {
        ...state,
        count2: state.count2 + 1,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
