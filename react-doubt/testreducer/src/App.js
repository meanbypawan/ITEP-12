import { useReducer, useState } from "react";

function App(){
  const [state,dispatch] = useReducer((state,action)=>{
     if(action.type === "increment")
      state.counter = state.counter + action.payload;
     else if(action.type === 'increment-even')
      state.evenCounter = state.evenCounter + 2;
     else if(action.type === "increment-odd")
      state.oddCounter = state.oddCounter + 2;
    return {...state};
  },{
    counter:100,
    evenCounter: 2,
    oddCounter: 1
  });

  console.log(state);
  return <>
     <button onClick={()=>{dispatch({type:"increment",payload:10})}}>Incrmenet Counter : {state?.counter}</button>
     <button onClick={()=>dispatch({type:"increment-even"})}>Increment Even : {state?.evenCounter}</button>
     <button onClick={()=>dispatch({type:"increment-odd"})}>Incrment Odd : {state?.oddCounter}</button>
  </>
}

export default App;