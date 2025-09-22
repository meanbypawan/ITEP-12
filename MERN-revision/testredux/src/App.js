import { useSelector } from "react-redux"
import First from "./First";

function App(){
  let {m1,m2} = useSelector((store)=>store.Messages);
  return <>
    <h1>App Component...</h1>
    {m1} : {m2}
    <First/>
  </>
}

export default App;