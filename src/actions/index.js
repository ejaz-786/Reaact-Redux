// Actions creators :

import {
  DECREAMENT_ACC,
  DECREAMENT_BONUS,
  INCREAMENT_ACC,
  INCREAMENT_BONUS,
} from "../constants";

export function increamentBonus() {
  return { type: INCREAMENT_BONUS };
}

export function decreamentBonus() {
  return { type: DECREAMENT_BONUS };
}

export function increamentAccount() {
  return { type: INCREAMENT_ACC };
}

export function decreamentAccount() {
  return { type: DECREAMENT_ACC };
}
