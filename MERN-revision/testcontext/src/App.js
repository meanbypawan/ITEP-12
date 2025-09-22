import { createContext, useReducer } from "react";
import A from "./components/A";
export const MessageContext =  createContext();
export const CounterContext = createContext();
function App(){
  let message = "Hello ReactJs";
  let m1 = "Hii";
  let m2 = "Bye";
  const [state,dispatch] = useReducer((state,action)=>{
    if(action.type == "increment"){
      state.counter = state.counter + 1;
    }
    else if(action.type == "increment-even"){
      state.evenCounter = state.evenCounter + 2;
    }
    else if(action.type == "increment-odd"){
      state.oddCounter = state.oddCounter + 2;
    }
    return {...state};
  },
  {counter: 100, evenCounter: 0, oddCounter: 1});
  return <>
   <MessageContext value={{message,m1,m2}}>
    <CounterContext value={{state,dispatch}}>
     <A/>
    </CounterContext> 
   </MessageContext>
  </>
}

export default App;