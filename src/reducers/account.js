import {
  DECREAMENT_ACC,
  INCREAMENT_ACC,
  INCREAMENT_BY_VALUE,
  FETCH_ACC_FULLFILLED,
  FETCH_ACC_PENDING,
  FETCH_ACC_REJECTED,
  DECREAMENT_BY_VALUE,
} from "../constants";

// account reducer
export const accountReducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case INCREAMENT_ACC:
      return { amount: state.amount + 1 };
    case DECREAMENT_ACC:
      return { amount: state.amount - 1 };
    case INCREAMENT_BY_VALUE:
      return { amount: state.amount + +action.payload };
    case DECREAMENT_BY_VALUE:
      let decreamentAmount = state.amount - +action.payload;
      console.log("decreamentAmount:", decreamentAmount);
      if (decreamentAmount > 0) {
        return { amount: decreamentAmount };
      } else {
        return { ...state, error: "can not subtract" };
      }
    // return { amount: state.amount - +action.payload };
    case FETCH_ACC_FULLFILLED:
      return { amount: +action.payload, pending: false };
    case FETCH_ACC_PENDING:
      return { ...state, pending: true };
    case FETCH_ACC_REJECTED:
      return { ...state, error: action.error, pending: false };
    default:
      return state;
  }
};
