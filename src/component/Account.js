import React, { useEffect, useState } from "react";
import "./style.css";
import {
  decreamentAccount,
  decrementByValue,
  getUserAccFullfilled,
  getUserAccPending,
  getUserAccRejected,
  increamentAccount,
  increamentByValue,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Account = (_props) => {
  const [value, setValue] = useState();
  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  // ASYNC API CALLLS:

  function getUserAccount(id) {
    return async (dispatch, getState) => {
      try {
        dispatch(getUserAccPending());
        const { data } = await axios.get(`http://localhost:8000/account/${id}`);
        dispatch(getUserAccFullfilled(data.amount));
      } catch (err) {
        dispatch(getUserAccRejected(err.message));
      }
    };
  }

  useEffect(() => {
    dispatch(getUserAccount(1));
  }, []);

  return (
    <>
      <div className="card">
        <h3>Account:{amount}</h3>
        <h4>bonus:{bonus}</h4>
        <div>
          <button onClick={() => dispatch(increamentAccount())}>
            Increament
          </button>
          <button onClick={() => dispatch(decreamentAccount())}>
            Decreament
          </button>
        </div>
        <div>
          <input onChange={(e) => setValue(e.target.value)} value={value} />
          <button onClick={() => value && dispatch(increamentByValue(value))}>
            INCR by value
          </button>
          <button onClick={() => value && dispatch(decrementByValue(value))}>
            DECR by value
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
