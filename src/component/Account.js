import React, { useState } from "react";
import "./style.css";
import { increamentAccount } from "../actions";
import { INCREAMENT_ACC } from "../constants";

const Account = (_props) => {
  const [value, setValue] = useState();

  const { store } = _props;

  return (
    <>
      <div className="card">
        <h3>Account:{store.getState().account.amount}</h3>
        <h4>bonus:{store.getState().bonus.points}</h4>
        <div>
          <button onClick={() => store.dispatch({ type: INCREAMENT_ACC })}>
            Increament
          </button>
          <button
            onClick={() => {
              console.log(store.getState());
            }}
          >
            get
          </button>
          {/* <button onClick={() => decreamentAmount()}>Decreament</button> */}
        </div>
        <div>
          {/* <input onChange={(e) => setValue(e.target.value)} value={value} /> */}
          {/* <button onClick={() => increamentByValue(value)}>
            INCR by value
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Account;
