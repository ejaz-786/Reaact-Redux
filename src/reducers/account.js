import { DECREAMENT_ACC, INCREAMENT_ACC } from "../constants";

// account reducer
export const accountReducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case INCREAMENT_ACC:
      return { amount: state.amount + 1 };
    case DECREAMENT_ACC:
      return { amount: state.amount - 1 };
    default:
      return state;
  }
};
