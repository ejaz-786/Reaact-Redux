import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

import { accountReducer } from "./account";
import { bonusReducer } from "./bonus";
import thunk from "redux-thunk";

const rootReducer = { account: accountReducer, bonus: bonusReducer };

// store
export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(logger, thunk)
);
