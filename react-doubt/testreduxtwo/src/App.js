import { useDispatch, useSelector } from "react-redux";
import { decrementIncrement, incrementCounter } from "./redux-config/DataSlice";

function App(){
  let {counter} = useSelector((store)=>store.Data);
  const dispatch = useDispatch();
  return <>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
      <button onClick={()=>dispatch(decrementIncrement())}>Decrement</button>
  </>
}

export default App;