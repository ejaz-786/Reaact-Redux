import { DECREAMENT_BONUS, INCREAMENT_BONUS } from "../constants";

// bonus reducer
export const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case INCREAMENT_BONUS:
      return { points: state.points + 1 };
    case DECREAMENT_BONUS:
      return { points: state.points - 1 };
    default:
      return state;
  }
};
