import { useSelector } from "react-redux";

function App(){
  const {m1,m2} = useSelector((store)=>store.DataMessage);
  const {counter,evenCounter} = useSelector((store)=>store.CounterData);
  return <>
    <h1>{m1}</h1>
    <h1>{m2}</h1>

    {counter} : {evenCounter}
  </>
}

export default App;