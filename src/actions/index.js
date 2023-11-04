// Actions creators :

import {
  DECREAMENT_ACC,
  FETCH_ACC_FULLFILLED,
  FETCH_ACC_PENDING,
  FETCH_ACC_REJECTED,
  INCREAMENT_ACC,
  INCREAMENT_BONUS,
  INCREAMENT_BY_VALUE,
  DECREAMENT_BY_VALUE,
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

export function decrementByValue(value) {
  return { type: DECREAMENT_BY_VALUE, payload: value };
}

// Async actions handlers :

export function getUserAccRejected(err) {
  return { type: FETCH_ACC_REJECTED, error: err };
}

export function getUserAccPending() {
  return { type: FETCH_ACC_PENDING };
}

export function getUserAccFullfilled(amount) {
  return { type: FETCH_ACC_FULLFILLED, payload: amount };
}
