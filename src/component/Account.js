import React, { useState } from "react";
import "./style.css";
import {
  decreamentAccount,
  increamentAccount,
  increamentByValue,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Account = (_props) => {
  const [value, setValue] = useState();
  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <h3>Account:{amount}</h3>
        <h4>bonus:{bonus}</h4>
        <div>
          <button onClick={() => dispatch(increamentAccount())}>
            Increament
          </button>
          <button onClick={() => {}}>get</button>
          <button onClick={() => dispatch(decreamentAccount())}>
            Decreament
          </button>
        </div>
        <div>
          <input onChange={(e) => setValue(e.target.value)} value={value} />
          <button onClick={() => dispatch(increamentByValue(value))}>
            INCR by value
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
