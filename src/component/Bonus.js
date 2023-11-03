import React from "react";
import "./style.css";

const Bonus = (_props) => {
  const { bonus, increamentBonus, account } = _props;
  return (
    <>
      <div className="card">
        <h3>Bonus:{bonus.points}</h3>
        <h4>account:{account.amount}</h4>
        <div>
          <button onClick={() => increamentBonus()}>Increament Bonus</button>
        </div>
      </div>
    </>
  );
};

export default Bonus;
