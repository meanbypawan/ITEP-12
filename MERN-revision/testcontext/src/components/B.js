import { useContext } from "react";
import C from "./C";
import { CounterContext } from "../App";

function B(){
    const {state,dispatch} =  useContext(CounterContext);
    return <>
      <h3>B component....</h3>
      <button onClick={()=>dispatch({type:"increment"})}>Counter : {state.counter}</button>
      <button onClick={()=>dispatch({type:"increment-even"})}>Even : {state.evenCounter}</button>
      <button onClick={()=>dispatch({type:"increment-odd"})}>Odd : {state.oddCounter}</button>
      <C/>
    </>
}

export default B;