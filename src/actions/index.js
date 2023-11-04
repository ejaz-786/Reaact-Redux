// Actions creators :

import {
  DECREAMENT_ACC,
  INCREAMENT_ACC,
  INCREAMENT_BONUS,
  INCREAMENT_BY_VALUE,
} from "../constants";

export function increamentBonus() {
  return { type: INCREAMENT_BONUS };
}

export function increamentAccount() {
  return { type: INCREAMENT_ACC };
}

export function decreamentAccount() {
  return { type: DECREAMENT_ACC };
}

export function increamentByValue(value) {
  return { type: INCREAMENT_BY_VALUE, payload: value };
}
