import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { increamentBonus } from "../actions";

const Bonus = (_props) => {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <h3>Bonus:{points}</h3>
        <h4>account:{amount}</h4>
        <div>
          <button onClick={() => dispatch(increamentBonus())}>
            Increament Bonus
          </button>
        </div>
      </div>
    </>
  );
};

export default Bonus;
