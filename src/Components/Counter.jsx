import { addCounter, reduceCounter } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
//import {useState} from "react";
import "../styles.css";
export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const [value,setValue] = useState(null);

  const handleAdd = () => {
    dispatch(addCounter(1));
  };
  const handleReduce = () => {
    if (counter === 0) {
      dispatch(reduceCounter(0));
    } else {
      dispatch(reduceCounter(1));
    }
  };
  return (
    <>
      <h1>React Redux - Calculator</h1>
      <div>
        <h1>{counter}</h1>
      </div>
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReduce}>-</button>
      </div>
    </>
  );
}
