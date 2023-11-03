import React, { useState } from "react";
import "./style.css";

const Account = (_props) => {
  const [value, setValue] = useState();

  const {
    increamentAmount,
    decreamentAmount,
    increamentByValue,
    account,
    bonus,
  } = _props;

  return (
    <>
      <div className="card">
        <h3>Account:{account.amount}</h3>
        <h4>bonus:{bonus.points}</h4>
        <div>
          <button onClick={() => increamentAmount()}>Increament</button>
          <button onClick={() => decreamentAmount()}>Decreament</button>
        </div>
        <div>
          <input onChange={(e) => setValue(e.target.value)} value={value} />
          <button onClick={() => increamentByValue(value)}>
            INCR by value
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
