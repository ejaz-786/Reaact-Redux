import { useState } from "react";
import "./App.css";
import Account from "./component/Account";
import Bonus from "./component/Bonus";
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  // const [account, setAccount] = useState({ amount: 0 });
  // const [bonus, setBonus] = useState({ points: 0 });

  // const increamentBonus = () => {
  //   setBonus({ ...bonus, points: bonus.points + 1 });
  // };

  // const increamentAmount = () => {
  //   setAccount({ ...account, amount: account.amount + 1 });
  // };
  // const decreamentAmount = () => {
  //   setAccount({ ...account, amount: account.amount - 1 });
  // };
  // const increamentByValue = (value) => {
  //   value !== undefined &&
  //     setAccount({ ...account, amount: account.amount + +value });
  // };
  return (
    <>
      <div className="App">
        <h1>App component</h1>
        <h2>Current Amount:{amount ?? "#"} </h2>
        <h2>Total Bonus: {points ?? "#"} </h2>
        <hr />
        <Account />
        <Bonus />
      </div>
    </>
  );
}

export default App;
