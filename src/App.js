import "./App.css";
import Account from "./component/Account";
import Bonus from "./component/Bonus";
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);
  return (
    <>
      <div className="App">
        <h1>App component</h1>
        {account.pending ? (
          <p>Loading ....</p>
        ) : account.error ? (
          <p> {account.error} </p>
        ) : (
          <h2>Current Amount:{account.amount} </h2>
        )}

        <h2>Total Bonus: {points} </h2>
        <hr />
        <Account />
        <Bonus />
      </div>
    </>
  );
}

export default App;
