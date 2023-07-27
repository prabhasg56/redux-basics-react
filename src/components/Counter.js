import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import  {counterAction} from "../store/counter";

//without redux-toolkit
// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const dispatch = useDispatch();

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const increaseHandler = () => {
//     dispatch({ type: "increase", amount: 2 });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
        
//         <button onClick={incrementHandler}>IncrementBy5</button>
//         <button onClick={increaseHandler}>IncrementBy2</button>
//         <button onClick={decrementHandler}>DecrementBy5</button>
//       </div>
//       <button onClick={toggleCounterHandler}>toggleCounter</button>
//     </main>
//   );
// };


const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>toggleCounter</button>
    </main>
  );
};
export default Counter;
